export class Item {
    constructor(private name:string, private age:number){}

    public say(elem: HTMLElement | null): void {
        if (elem) {
            elem.innerHTML = '家で飼っている猫の名前は' + this.name + 'です。年齢は'
                + this.age + '才になりました。';
        }
    }
}