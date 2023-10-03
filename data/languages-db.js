const languages = [
    {language: 'JavaScript', done: true},
    {language: 'HTML', done: true},
    {language: 'Python', done: false},
    {language: 'CSS', done: true},
    {language: 'React', done: false}
];

module.exports = {
    getAll: function() {
        return languages;
    }
};