// @ts-nocheck

import {useEffect, useState} from 'react'
import Styles from '../../styles/Encyclopedia.module.css'
import Radio from '../../components/Radio'
import returnDefinitions from '../../utilities/definitions'
import InputText from '../../components/InputText'
import Skeleton from '../../components/Skeleton'

const definitions = returnDefinitions()

const alphabet: string[] = []
definitions.forEach(term => {if (!alphabet.includes(term.short[0])) alphabet.push(term.short[0])})

export default function Encyclopedia() {
    const [letter, setLetter] = useState('C')
    const visibleDefinitions = definitions.filter(term => term.short[0].toUpperCase() === letter.toUpperCase())
    const [definition, setDefinition] = useState(visibleDefinitions[0])
    const [desc, setDesc] = useState<string>(null)

    const [searchFor, setSearchFor] = useState('')

    useEffect(() => setDefinition(visibleDefinitions[0]), [letter])
    useEffect(() => {
        setDesc(null)
        fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&titles=${definition.long}&origin=*`)
            .then(response => response.json())
            .then(result => setDesc(Object.values(result.query.pages)[0].extract))
    }, [definition])

    function handleDefinitionChange(e) {
        const selectedDefinition = definitions.filter(definition => definition.long === e.target.value)[0]
        setDefinition(selectedDefinition)
    }

    let events: string[] = []
    let militias: string[] = []
    let parties: string[] = []
    visibleDefinitions.filter(term => term.type === 'event').forEach(definition => events.push(definition.long))
    visibleDefinitions.filter(term => term.type === 'militia').forEach(definition => militias.push(definition.long))
    visibleDefinitions.filter(term => term.type === 'party').forEach(definition => parties.push(definition.long))

    return (
        <div className={Styles.master}>
            <div className={Styles.options}>
                <div>
                    <div className='h7'>Search</div>
                    <InputText type='search' name='keyword' value={searchFor} handleChange={e => setSearchFor(e.target.value)} placeholder='Keyword?' />
                </div>
                {!(searchFor.length > 0) && (
                    <div>
                        <div className='h7'>Alphabet</div>
                        <Radio name='alphabet' options={alphabet} value={letter} handleChange={(e) => setLetter(e.target.value)} style='box' />
                    </div>
                )}
                <div className={Styles.definitions}>
                    {events.length > 0 && (
                        <div>
                            <div className='h7'>Events</div>
                            <Radio name='terms' options={events} value={definition.long} handleChange={handleDefinitionChange} style='definition' />
                        </div>
                    )}
                    {militias.length > 0 && (
                        <div>
                            <div className='h7'>Armed organizations</div>
                            <Radio name='terms' options={militias} value={definition.long} handleChange={handleDefinitionChange} style='definition'/>
                        </div>
                    )}
                    {parties.length > 0 && (
                        <div>
                            <div className='h7'>Political organizations</div>
                            <Radio name='terms' options={parties} value={definition.long} handleChange={handleDefinitionChange} style='definition'/>
                        </div>
                    )}
                </div>
            </div>
            <div className={Styles.description}>
                <h1>{definition.long}</h1>
                {desc ? <p dangerouslySetInnerHTML={{__html: desc}} className='p1' /> : <Skeleton type='text' />}
            </div>
        </div>
    )
}