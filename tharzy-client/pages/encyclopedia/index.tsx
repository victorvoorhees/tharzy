// @ts-nocheck

import {useEffect, useState} from 'react'
import Styles from '../../styles/Encyclopedia.module.css'
import RadioAlphabet from '../../components/RadioAlphabet'
import RadioTerms from '../../components/RadioTerms'
import Search from '../../components/Search'
import returnDefinitions from '../../utilities/definitions'
import SkeletonText from '../../components/SkeletonText'

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

    return (
        <div className={Styles.master}>
            <div>
                <Search label='Search' value={searchFor} handleChange={e => setSearchFor(e.target.value)} styles={Styles.option} />
                {!(searchFor.length > 0) && <RadioAlphabet name='alphabet' options={alphabet} value={letter} handleChange={(e) => setLetter(e.target.value)} styles={Styles.option} />}
                {visibleDefinitions.filter(term => term.type === 'event').length > 0 && <RadioTerms label='Events' name='terms' options={visibleDefinitions.filter(term => term.type === 'event')} value={definition} handleChange={setDefinition} />}
                {visibleDefinitions.filter(term => term.type === 'militia').length > 0 && <RadioTerms label='Armed organizations' name='terms'
                             options={visibleDefinitions.filter(term => term.type === 'militia')} value={definition}
                             handleChange={setDefinition}/>}
                {visibleDefinitions.filter(term => term.type === 'party').length > 0 && <RadioTerms label='Political organizations' name='terms'
                             options={visibleDefinitions.filter(term => term.type === 'party')} value={definition}
                             handleChange={setDefinition}/>}
            </div>
            <div className={Styles.description}>
                <h1>{definition.long}</h1>
                {desc ? (
                    <div dangerouslySetInnerHTML={{__html: desc}} className='p-2' />
                ) : (
                    <SkeletonText />
                )}
            </div>
        </div>
    )
}