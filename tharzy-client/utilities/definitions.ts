export interface IDefinition {
    long: string,
    keywords: string[],
    type: 'event' | 'militia' | 'party' | 'person'
}

export default function returnDefinitions(): IDefinition[] {
    return [
        {
            long: 'All Burma Students\' Democratic Front',
            keywords: ['ABSDF'],
            type: 'militia'
        },
        {
            long: 'Arakan Army',
            keywords: ['AA'],
            type: 'militia'
        },
        {
            long: 'Arakan Liberation Army',
            keywords: ['ALA'],
            type: 'militia'
        },
        {
            long: 'Arakan Liberation Party',
            keywords: [],
            type: 'party'
        },
        {
            long: 'Arakan Rohingya Salvation Army',
            keywords: ['ARSA'],
            type: 'militia'
        },
        {
            long: 'Aung San',
            keywords: [],
            type: 'person'
        },
        {
            long: 'Aung San Suu Kyi',
            keywords: [],
            type: 'person'
        },
        {
            long: `Bamar People's Liberation Army`,
            keywords: ['BPLA'],
            type: 'militia'
        },
        {
            long: 'Chin National Army',
            keywords: ['CNA'],
            type: 'militia'
        },
        {
            long: 'Chinland Defense Force',
            keywords: ['CDF'],
            type: 'militia'
        },
        {
            long: 'Committee Representing Pyidaungsu Hluttaw',
            keywords: ['CRPH'],
            type: 'party'
        },
        {
            long: 'Communist insurgency in Burma',
            keywords: [],
            type: 'event'
        },
        {
            long: 'Communist Party of Burma',
            keywords: ['CPB'],
            type: 'party'
        },
        {
            long: 'Democratic Karen Buddhist Army',
            keywords: ['DKBA'],
            type: 'militia'
        },
        {
            long: 'Kachin Independence Army',
            keywords: ['KIA'],
            type: 'militia'
        },
        {
            long: 'Kachin Independence Organisation',
            keywords: ['KIO'],
            type: 'party'
        },
        {
            long: 'Karen National Defence Organisation',
            keywords: ['KNDO'],
            type: 'militia'
        },
        {
            long: 'Karen National Liberation Army',
            keywords: ['KNLA'],
            type: 'militia'
        },
        {
            long: 'Karen National Union',
            keywords: ['KNU'],
            type: 'party'
        },
        {
            long: 'Karenni Army',
            keywords: [],
            type: 'militia'
        },
        {
            long: 'Karenni National Progressive Party',
            keywords: ['KNPP'],
            type: 'party'
        },
        {
            long: 'Kuki National Army',
            keywords: ['KNA(B)'],
            type: 'militia'
        },
        {
            long: 'Lahu Democratic Union',
            keywords: ['LDU'],
            type: 'party'
        },
        {
            long: 'Min Aung Hlaing',
            keywords: [],
            type: 'person'
        },
        {
            long: 'Mon National Liberation Army',
            keywords: ['MNLA'],
            type: 'militia'
        },
        {
            long: 'Myanmar National Democratic Alliance Army',
            keywords: ['MNDAA'],
            type: 'militia'
        },
        {
            long: 'National Democratic Alliance Army',
            keywords: ['NDAA'],
            type: 'militia'
        },
        {
            long: 'National League for Democracy',
            keywords: ['NLD'],
            type: 'party'
        },
        {
            long: 'National Unity Government of Myanmar',
            keywords: ['NUG'],
            type: 'party'
        },
        {
            long: 'Nationwide Ceasefire Agreement',
            keywords: ['NCA'],
            type: 'event'
        },
        {
            long: 'Ne Win',
            keywords: [],
            type: 'person'
        },
        {
            long: 'New Mon State Party',
            keywords: [],
            type: 'party'
        },
        {
            long: `Pa-O National Army`,
            keywords: ['PNA'],
            type: 'militia'
        },
        {
            long: `Pa-O National Liberation Army`,
            keywords: ['PNLA'],
            type: 'militia'
        },
        {
            long: `Pa-O National Liberation Organisation`,
            keywords: [],
            type: 'party'
        },
        {
            long: `Pa-O National Organisation`,
            keywords: [],
            type: 'party'
        },
        {
            long: `Palaung State Liberation Front`,
            keywords: ['PSLF'],
            type: 'party'
        },
        {
            long: `People's Defence Force (Myanmar)`,
            keywords: ['PDF'],
            type: 'militia'
        },
        {
            long: 'Rohingya Solidarity Organisation',
            keywords: ['RSO'],
            type: 'party'
        },
        {
            long: 'Saw Maung',
            keywords: [],
            type: 'person'
        },
        {
            long: 'Shan State Army – North',
            keywords: ['SSA-N'],
            type: 'militia'
        },
        {
            long: 'Shan State Army – South',
            keywords: ['SSA-S'],
            type: 'militia'
        },
        {
            long: `Ta'ang National Liberation Army`,
            keywords: ['TNLA'],
            type: 'militia'
        },
        {
            long: 'Tatmadaw',
            keywords: [],
            type: 'militia'
        },
        {
            long: 'Thein Sein',
            keywords: [],
            type: 'person'
        },
        {
            long: 'United League of Arakan',
            keywords: ['ULA'],
            type: 'party'
        },
        {
            long: 'United Wa State Army',
            keywords: ['UWSA'],
            type: 'militia'
        },
        {
            long: 'United Wa State Party',
            keywords: ['UWSP'],
            type: 'party'
        },
    ]
}