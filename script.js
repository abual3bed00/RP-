// script.js
document.getElementById('start-test').addEventListener('click', startTest);

const questions = [
    // 1
    { question: 'ما هي الحالة التي يُسمح فيها بإعدام مجرم؟', answers: ['مفسد في المدينة', 'عليه أكثر من 700 شهر', 'مطلوب للعدالة', 'جميع ما سبق'], correct: 3 },

    // 2
    { question: 'ما هي تعريف "مفسد في المدينة"؟', answers: ['سرقة مركبات المواطنين أكثر من مرة', 'قتل المواطنين', 'كثرة السرقات في المدينة مع إثبات ذلك', 'جميع ما سبق'], correct: 3 },

    // 3
    { question: 'ما هي الخطوات الواجب اتباعها عند إعدام مجرم؟', answers: ['تواجد محكمة', 'إثبات التهم', 'تواجد محكمة و إثبات التهم', 'لا شيء مما سبق'], correct: 2 },

    // 4
    { question: 'أي من المناطق التالية يعتبر منطقة آمنة؟', answers: ['مراكز الشرطة', 'المستشفيات', 'المطاعم', 'جميع ما سبق'], correct: 3 },

    // 5
    { question: 'في حالة الهروب إلى منطقة آمنة، هل يُسمح بخطف الشخص؟', answers: ['نعم، في جميع المناطق', 'لا، في جميع المناطق', 'نعم، إلا في مركز الشرطة والمستشفى والمرافق الحكومية', 'نعم، في جميع المناطق إلا المستشفى'], correct: 1 },

    // 6
    { question: 'ما هو البند المتعلق بعدم التدخل في سيناريو قائم؟', answers: ['بند 1', 'بند 8', 'بند 12', 'بند 20'], correct: 1 },

    // 7
    { question: 'ما هي المدة التي يجب أن يدور فيها الحوار قبل بدء العداوة؟', answers: ['10 دقائق', '15 دقيقة', '20 دقيقة', '30 دقيقة'], correct: 1 },

    // 8
    { question: 'ما هو التصرف الممنوع أثناء الهروب الأمن؟', answers: ['التوجه إلى المسطحات المائية', 'توجيه إهانات للعساكر', 'استخدام النايتروس', 'جميع ما سبق'], correct: 3 },

    // 9
    { question: 'في حال قام شخص بل اسائة اليك او قام بفعل مخالف وانت في سيناريو او حوار ماذا ستفعل ؟', answers: ['ارد له الاسائة', 'اقوم بالاستكمال واخذ حقي بالرول بدون سب او اساءة ', 'استكمل طبيعي وبعد الانتهاء ارفع عليه شكوى عند الادارة', 'جميع ما سبق'], correct: 2 },

    // 10
    { question: 'متى يمكن استخدام السلاح الناري للعسكري؟', answers: ['في حالة حمل المواطن سلاحه بيده', 'في حالة محاولة خطف عسكري', 'في حالة محاولة تهريب الأسلحة', 'جميع ما سبق'], correct: 3 },

    // 11
    { question: 'ما هو الحد الأقصى لمدة احتجاز الرهينة؟', answers: ['15 دقيقة', '20 دقيقة', '25 دقيقة', '30 دقيقة'], correct: 1 },

    // 12
    { question: 'ما هي الخطوة الأولى التي يجب على الشرطي اتخاذها عند إلقاء القبض على مجرم؟', answers: ['تفتيشه', 'قراءة الحقوق عليه', 'كلبشته', 'جميع ما سبق'], correct: 2 },

    // 13
    { question: 'ما هي الحالات التي يُمنع فيها استفزاز الأشخاص بغرض بدء العداوة؟', answers: ['عند محاولة خطفهم', 'عند سرقتهم', 'عند استفزازهم لفظياً', 'جميع ما سبق'], correct: 3 },

    // 14
    { question: 'ما هي المناطق التي يجب على العسكري تجنبها أثناء المطاردة؟', answers: ['البحر', 'الحارات الضيقة', 'المباني', ' جميع ما سبق '], correct: 3 },
//لماذا اخترت هذا الخيار؟
    // 15
    { question: 'ما هي الحالة التي يحق فيها للعسكري استخدام السلاح الثقيل؟', answers: ['محاولة خطف عسكري', 'تهديد حياة المدنيين', 'التعامل مع مصرف', 'جميع ما سبق'], correct: 2 },

    // 16
    { question: 'ما هو البند المتعلق بعدم استخدام أي جرافيكس أو برامج خارجية تساعد على اللعب؟', answers: ['بند 10', 'بند 12', 'بند 14', 'بند 26'], correct: 2 },

    // 17
    { question: 'متى يحق لك خطف شخص كرهينة؟', answers: ['عندما يكون في تجمع', 'عندما يكون في منطقة امنة', 'عند تهديدي', 'في حال كنت اريد ان اقوم بسرقة'], correct: 3 },

    // 18
    { question: 'ما هي الإجراءات الواجب اتباعها عند التعامل مع حالة خطف لرهينة؟', answers: ['محاصرة الموقع', 'تعيين مفاوض', 'التأكد من صحة الرهينة', 'جميع ما سبق'], correct: 3 },

    // 19
    { question: 'ما هو التصرف الواجب اتخاذه عند وفاة الشخص في السيناريو؟', answers: ['التعبير عن الألم فقط', 'التحدث بشكل طبيعي', 'العودة للموقع فورًا', 'جميع ما سبق'], correct: 0 },

    // 20
    { question: 'ما هو الحد الأدنى لمدة السيناريو المطلوب لإنشاء عداوة بين العصابات؟', answers: ['10 دقائق', '15 دقيقة', '20 دقيقة', '30 دقيقة'], correct: 1 }
];

let currentQuestionIndex = 0;
let score = 0;
let username = '';

function startTest() {
    username = document.getElementById('username').value;
    if (username === '') {
        alert('يرجى إدخال الاسم');
        return;
    }
    document.getElementById('user-form').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const currentQuestion = questions[currentQuestionIndex];
    
    questionElement.innerHTML = currentQuestion.question;
    answersElement.innerHTML = '';
    
    currentQuestion.answers.forEach((answer, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<input type="radio" name="answer" value="${index}"> ${answer}`;
        answersElement.appendChild(div);
    });
}

document.getElementById('next-question').addEventListener('click', () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert('يرجى اختيار إجابة');
        return;
    }
    
    if (parseInt(selectedAnswer.value) === questions[currentQuestionIndex].correct) {
        score += 5; // تعديل هذا الرقم حسب النقاط لكل سؤال
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').innerText = `حصلت على ${score} من 100`;
    
    if (score >= 90) {
        document.getElementById('score').innerText += '\nمبروك! لقد اجتزت الاختبار';
    } else {
        document.getElementById('score').innerText += '\nللأسف، لم تجتز الاختبار';
    }
    
    saveResult(username, score);
}

function saveResult(username, score) {
    const results = JSON.parse(localStorage.getItem('results')) || [];
    results.push({ username, score });
    localStorage.setItem('results', JSON.stringify(results));
}

document.getElementById('view-all-results').addEventListener('click', () => {
    document.getElementById('result').style.display = 'none';
    document.getElementById('all-results').style.display = 'block';
    
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';
    
    const results = JSON.parse(localStorage.getItem('results')) || [];
    results.forEach(result => {
        const li = document.createElement('li');
        li.innerText = `${result.username}: ${result.score}`;
        resultsList.appendChild(li);
    });
});
