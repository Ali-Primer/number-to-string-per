function number_to_letter(number) {

    if (number == 0) {
        return 'صفر'
    }

    if (number >= (10 ** 18)) {
        return ' عدد غیر قابل محاسبه است'
    }

    const smallNUMS = ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه", "ده", "یازده", "دوازده", "سیزده", "چهارده", "پانزده", "شانزده", "هفده", "هجده", "نوزده"]
    const tens = ["", "", "بیست", "سی", "چهل", "پنجاه", "شست", "هفتاد", "هشتاد", "نود"]
    const hundreds = ["", "صد", "دویست", "سیصد", "چهارصد", "پانصد", "ششصد", "هفتصد", "هشتصد", "نهصد"]
    const bigNUMS = ["", "هزار", "میلیون", "میلیارد", "تریلیون", "تریلیارد"]

    let sentence = []
    let biggest = 0

    while (number > 0) {
        // جداسازی 3 رقم 3 رقم
        var n = number % 1000
        if (n > 0) {
            let parts = []
            // بررسی تک تک حالت ها
            if (n >= 100) {
                // اضافه کردن به آخر آرایه parts
                parts.push(hundreds[Math.floor(n / 100)])
                n %= 100
            }
            if (n >= 20) {
                parts.push(tens[Math.floor(n / 10)])
                n %= 10
            }
            if (n > 0) {
                parts.push(smallNUMS[n])
            }
            // تبدیل آرایه به استرینگ
            let text = parts.join(" و ")
            // واحد ها بزرگ اضافه می شوند به انتها متن ساخته شده توسط آرایه
            if (bigNUMS[biggest]) {
                text += " " + bigNUMS[biggest]
            }
            sentence.unshift(text)
        }
        number = Math.floor(number / 1000)
        // ارزش مکانی یکی به جلو میرود
        biggest++
    }
    return sentence.join(" و ")
}

console.log(number_to_letter(7000000000000000)); 