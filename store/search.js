import { awards, conferences, employment, interviews, leadership, memberships, presentations, projects, publications, recommendations, research, teaching } from '~/static/data';
const levenshtein = require('fast-levenshtein');

export const state = () => ({
    searchText: '',
    searchData: [
        ...awards.map((each) => { return { ...each, source: 'Awards' }}),
        ...employment.map((each) => { return { ...each, source: 'Experience' }}),
        ...leadership.map((each) => { return { ...each, source: 'Experience' }}),
        ...memberships.map((each) => { return { ...each, source: 'Involvement' }}),
        ...conferences.map((each) => { return { ...each, source: 'Involvement' }}),
        ...presentations.map((each) => { return { ...each, source: 'Presentations' }}),
        ...projects.map((each) => { return { ...each, source: 'Projects' }}),
        ...publications.map((each) => { return { ...each, source: 'Publications' }}),
        ...interviews.map((each) => { return { ...each, source: 'Publications' }}),
        ...recommendations.map((each) => { return { ...each, source: 'Recommendations' }}),
        ...teaching.map((each) => { return { ...each, source: 'Teaching_and_Research' }}),
        ...research.map((each) => { return { ...each, source: 'Teaching_and_Research' }})
    ],
    searchResults: [],
    searching: false,
})

export const mutations = {
    setSearchText(state, data) {
        state.searchText = data
    },

    setSearching(state, data) {
        state.searching = data
    },

    setSearchResults(state, data) {
        state.searchResults = data
    }
}

export const actions = {
    async search({ commit, state }, { searchText }) {
        searchText = searchText.trim()
        searchText = searchText.replace(/\s+/g, ' ')
        await commit('setSearchText', searchText)
        await commit('setSearching', true)
        
        const results = state.searchData.map((item) => {
            const score = calculateSearchScore(item, searchText)
            return { ...item, score }
        }).filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score);

        await commit('setSearchResults', results);
        await commit('setSearching', false)
    }
}

// EXTERNAL FUNCTIONS

function calculateSearchScore(item, searchText) {
    const searchTerms = searchText.toLowerCase().split(' ');
    const commonWords = [
        "a",
        "an",
        "the",
        "in",
        "of",
        "to",
        "for",
        "on",
        "with",
        "by",
        "from",
        "at",
        "about",
        "and",
        "but",
        "or",
        "nor",
        "yet",
        "so",
        "I",
        "you",
        "he",
        "she",
        "it",
        "we",
        "they",
        "me",
        "him",
        "her",
        "us",
        "them",
        "not",
        "very",
        "really",
        "quite",
        "too",
        "so",
        "also",
        "then",
        "now",
        "here",
        "there",
        "that",
        "this",
        "these",
        "those",
        "which",
        "who",
        "whom",
        "whose"
    ];

    let score = 0;
    for (const key in item) {
        if (typeof item[key] === 'string') {
            const text = item[key].toLowerCase();
            searchTerms.forEach((term) => {
                text.split(' ').forEach((word) => {
                    if (term.length < 5) {
                        if (term == word) score++
                    } else if (!commonWords.includes(term) && !commonWords.includes(word)) {
                        if (levenshtein.get(term, word) < 3) {
                            score++
                        }
                    }
                })
            });
        }
    }

    return score;
}