const showClassBetween = (now: number, from: number, to: number, className: String): String => {
    if(now > from && now < to){
        console.log('rerenderClass->true', className, now, from, to)
        return className;
    }
    console.log('rerenderClass->false', className, now, from, to)
    return '';
}
const hideClassBetween = (now: number, from: number, to: number, className: String): String => {
    console.log('rerender', now, from, to)
    if(now > from && now < to){
        console.log('rerenderClass->false', className, now, from, to)
        return '';
    }
    console.log('rerenderClass->true', className, now, from, to)
    return className;
}

export { showClassBetween, hideClassBetween }