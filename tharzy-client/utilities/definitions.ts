export interface IDefinition {
    long: string,
    short: string,
    type: 'event' | 'militia' | 'party' | 'person'
}

export default function returnDefinitions(): IDefinition[] {
    return [
        {
            long: 'All Burma Students\' Democratic Front',
            short: 'ABSDF',
            type: 'militia'
        },
        {
            long: 'Arakan Army',
            short: 'AA',
            type: 'militia'
        },
        {
            long: 'Chinland Defense Force',
            short: 'CDF',
            type: 'militia'
        },
        {
            long: 'Committee Representing Pyidaungsu Hluttaw',
            short: 'CRPH',
            type: 'party'
        },
        {
            long: 'Communist insurgency in Burma',
            short: 'Communist insurgency',
            type: 'event'
        },
        {
            long: 'Communist Party of Burma',
            short: 'Communist Party of Burma',
            type: 'party'
        },
        {
            long: 'Kachin Independence Army',
            short: 'Kachin Independence Army',
            type: 'militia'
        },
    ]
}