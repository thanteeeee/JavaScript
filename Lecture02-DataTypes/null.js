function getVowels(str) {
    const m = str.match(/[aeiou]/gi); 
    //g: หมายถึง global ซึ่งจะค้นหาทุกตำแหน่งในข้อความ (ไม่หยุดที่เจอครั้งแรก)
    //i: หมายถึง case-insensitive ซึ่งไม่สนใจตัวพิมพ์เล็กหรือใหญ่ (จับได้ทั้ง A และ a)
    console.log(m);
    if (m === null) {
        return 0 ;
    }
    return m.length ;
}

console.log(getVowels("seeing")) ;
