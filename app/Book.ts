import { base, en, Faker, LocaleDefinition } from "@faker-js/faker";

export class Book {
    faker; seed; locale; likes; reviews; isbn; title; author; publisher; release;
    constructor(locale: LocaleDefinition, seed: number, likes: number, reviews: number) {
        this.faker = new Faker({
            locale: [locale, en, base],
            seed: seed
        })
        this.seed = seed;
        this.locale = locale;
        this.likes = this.getWeightedRandomNumber(likes);
        this.reviews = this.getWeightedRandomNumber(reviews);
        this.isbn = this.faker.commerce.isbn();
        this.title = this.getTitle();
        this.author =  this.faker.person.fullName();
        this.publisher =  this.faker.company.name();
        this.release = this.faker.date.birthdate({ 
            mode: 'year', 
            min: 2000, 
            max: 2025, 
            refDate: '2025-01-01T00:00:00.000Z' 
        }).getFullYear();
    }

    getData() {
        return {
            faker: this.faker,
            likes: this.likes,
            reviews: this.reviews,
            isbn: this.isbn, 
            title: this.title,
            author: this.author, 
            publisher: this.publisher,
            release: this.release,
            getCover: this.getBookCover(),
            getReview: this.getReview()
        }
    }

    getWeightedRandomNumber(count: number) {
        return this.faker.datatype.boolean({ 
            probability: Number.isInteger(count) ? 0.99 : count % 1 // There is a bug in case of probability = 0 or 1
         }) ? Math.ceil(count) : Math.floor(count)
    }

    getTitle () {
        return this.faker.helpers.arrayElement([
            this.capitilize(this.faker.word.noun()),
            `${this.capitilize(this.faker.word.adjective())} ${this.capitilize(this.faker.word.noun())}`,
        ])
    }

    
    getReview () {
        return this.faker.helpers.arrayElement([
            this.getSentense() + this.getSentense(),
            this.getSentense() + this.getSentense() + this.getSentense(),
            this.getSentense() + this.getSentense() + this.getSentense() + this.getSentense(),
        ])
    }

    getBookCover = () => {
        return `https://picsum.photos/seed/${this.seed}${this.locale?.metadata?.code}/135/210`;
    }
    
    getSentense () {
        return this.capitilize(this.faker.helpers.arrayElement([
            this.faker.word.noun(),
            `${this.faker.word.adjective()} ${this.faker.word.noun()}`
        ]) + ' ' +
        this.faker.helpers.arrayElement([
            this.faker.word.verb(),
            `${this.faker.word.verb()} ${this.faker.word.adverb()}` 
        ]) + ' ' +
        this.faker.helpers.arrayElement([
            this.faker.word.noun(),
            `${this.faker.word.adjective()} ${this.faker.word.noun()}`, 
            `${this.faker.word.conjunction()} ${this.faker.word.noun()}`,
            `${this.faker.word.preposition()} ${this.faker.word.noun()}` 
        ]) + '. ')
    }

    capitilize(sample: string) {
        return sample.charAt(0).toUpperCase() + sample.slice(1);
    }
}