// @ts-nocheck

import Link from "next/link";
import {useEffect, useState} from 'react'
import returnDefinitions from '../../utilities/definitions'
import Chips from '../../components/Chips'
import Definitions from "../../components/Definitions";
import Search from '../../components/Search'
import {returnBody} from "../../utilities/dummy";
import Styles from '../../styles/Wiki.module.css'

const definitions = returnDefinitions()

const alphabet: string[] = []
definitions.forEach(term => {if (!alphabet.includes(term.long[0])) alphabet.push(term.long[0])})

export default function Encyclopedia() {
    const [search, setSearch] = useState('')
    const [letter, setLetter] = useState('C')

    let visibleDefinitions;
    if (search.length > 0) {
        visibleDefinitions = definitions.filter(term => (term.long.toUpperCase().includes(search.toUpperCase()) || term.keywords.includes(search.toUpperCase())))
    } else {
        visibleDefinitions = definitions.filter(term => term.long[0].toUpperCase() === letter.toUpperCase())
    }

    const [definition, setDefinition] = useState(visibleDefinitions[0])
    const [desc, setDesc] = useState<string>('loading')

    useEffect(() => setDefinition(visibleDefinitions[0]), [letter])
    useEffect(() => {
        setDesc('loading')
        async function get() {
            try {
                const response = await fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&redirects=1&titles=${definition.long}&origin=*`)
                const txt = await response.json()
                setDesc(Object.values(txt.query.pages)[0].extract)
            }
            catch (e) {
                console.error(e)
                setDesc('error')
            }
        }
        get()
        /* https://en.wikipedia.org/api/rest_v1/page/summary/${definition.long} */
    }, [definition])

    function handleDefinitionChange(e) {
        const selectedDefinition = definitions.filter(definition => definition.long === e.target.value)[0]
        setDefinition(selectedDefinition)
    }

    function changeLetter(e) {
        if (!search.length > 0) {
            setLetter(e.target.value)
        }
    }

    let people = []
    let events = []
    let militias = []
    let parties = []
    visibleDefinitions.filter(term => term.type === 'person').forEach(definition => people.push(definition.long))
    visibleDefinitions.filter(term => term.type === 'event').forEach(definition => events.push(definition.long))
    visibleDefinitions.filter(term => term.type === 'militia').forEach(definition => militias.push(definition.long))
    visibleDefinitions.filter(term => term.type === 'party').forEach(definition => parties.push(definition.long))

    return (
        <div className={Styles.master}>
            <div className={Styles.options}>
                <div>
                    <div>
                        <div className='bold'>Search</div>
                        <Search name='keyword' value={search} handleChange={e => setSearch(e.target.value)} />
                    </div>
                    <div className={(search.length > 0) && Styles.disabled}>
                        <div className='bold'>Filter</div>
                        <Chips name='alphabet' options={alphabet} value={letter} handleChange={changeLetter} />
                    </div>
                </div>
                <div className={Styles.definitions}>
                    {people.length > 0 && (
                        <div>
                            <div className='bold'>Individuals</div>
                            <Definitions name='terms' options={people} value={definition.long} handleChange={handleDefinitionChange}/>
                        </div>
                    )}
                    {militias.length > 0 && (
                        <div>
                            <div className='bold'>Armed organizations</div>
                            <Definitions name='terms' options={militias} value={definition.long} handleChange={handleDefinitionChange}/>
                        </div>
                    )}
                    {parties.length > 0 && (
                        <div>
                            <div className='bold'>Political organizations</div>
                            <Definitions name='terms' options={parties} value={definition.long} handleChange={handleDefinitionChange}/>
                        </div>
                    )}
                    {events.length > 0 && (
                        <div>
                            <div className='bold'>Events</div>
                            <Definitions name='terms' options={events} value={definition.long} handleChange={handleDefinitionChange}/>
                        </div>
                    )}
                    {!(visibleDefinitions.length > 0) && (
                        <div className={Styles.nothing}>
                            <img src='empty_box.svg' />
                            <div>No entry found.</div>
                            <p>Maybe try typing a different keyword.</p>
                        </div>
                    )}
                </div>
            </div>
            {(desc === 'loading') ? (
                <div className='h1'>Loading</div>
            ) : (
                (desc === 'error') ? (
                    <div>error</div>
                ) : (
                    <div className={Styles.description}>
                        <h1>{definition.long}</h1>
                        <div className={Styles.top}>
                            <h2>Top definition</h2>
                            <p>{returnBody().slice(0, 380)}</p>
                            <Link href='wiki/userwiki' ><a><button className='outline'>View all user definitions</button></a></Link>
                        </div>
                        <div className={Styles.top}>
                            <h2>Wikipedia definition</h2>
                            <div dangerouslySetInnerHTML={{__html: desc}} />
                        </div>
                        <div className={Styles.guest}>
                            <div>Want to explain this entry differently?</div>
                            <p>Login or create an account to post your own definition. With enough likes, it will become the top definition!</p>
                            <div>
                                <Link href='login' ><a><button className='primary'>Sign up</button></a></Link>
                                <Link href='signup' ><a><button className='outline'>Login</button></a></Link>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}