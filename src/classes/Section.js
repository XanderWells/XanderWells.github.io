


class Section {
    #name = "default";
    #sectionURL = "default name URL"
    #overviewDescription = `default description for ${this.#name}`
    #urls = []
    #urlsInOverview = this.#urls
    #seeAllDescription = "Click to see all"
    /**
     * 
     * @param {[String]} name 
     * @param {*} sectionURL 
     * @param {*} overviewDescription 
     * @param {*} urls 
     * @param {*} urlsInOverview 
     */
    constructor(name, sectionURL, overviewDescription, urls, urlsInOverview, seeAllDescription) {
        if (name) this.#name = name
        if (sectionURL) this.#sectionURL = sectionURL
        if (overviewDescription) this.#overviewDescription = overviewDescription
        if (urls) this.#urls = urls
        if (urlsInOverview) this.#urlsInOverview = urlsInOverview
        if (seeAllDescription) this.#seeAllDescription = seeAllDescription
    }

    get name() {
        return this.#name
    }
    set name(newName) {
        this.#name = newName
    }

    get sectionURL() {
        return this.#sectionURL
    }
    set sectionURL(newSectionURL) {
        this.#sectionURL = newSectionURL
    }

    get overviewDescription () {
        return this.#overviewDescription
    }
    set overviewDescription(newOverviewDescription) {
        this.#overviewDescription = newOverviewDescription
    }

    get urls() {
        return this.#urls
    }
    set urls(newURLS) {
        this.#urls = newURLS
    }

    get urlsInOverview() {
        return this.#urlsInOverview
    }
    set urlsInOverview(newURLSInOverview) {
        this.#urlsInOverview = newURLSInOverview
    }

    get seeAllDescription() {
        return this.#seeAllDescription
    }
    set seeAllDescription(newSeeAllDescription) {
        this.#seeAllDescription = newSeeAllDescription
    }
}

export default Section