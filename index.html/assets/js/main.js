    filterForm.addEventListener('submit', (e) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة
        renderFilteredEvents();
    });

function validateForm(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة الافتراضي
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const responseMsgDiv = document.getElementById('responseMessage');
    
    if (!name || !email) {
        responseMsgDiv.innerHTML = '<div class="alert alert-danger">يرجى ملء كافة الحقول المطلوبة.</div>';
        return false;
    }

    // التحقق من صيغة البريد الإلكتروني (RegEx بسيطة)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        responseMsgDiv.innerHTML = '<div class="alert alert-danger">صيغة البريد الإلكتروني غير صالحة.</div>';
        return false;
    }

    // النجاح: إظهار رسالة Bootstrap Alert للنجاح
    responseMsgDiv.innerHTML = '<div class="alert alert-success">تم إرسال رسالتك بنجاح! شكراً للتواصل.</div>';
    document.getElementById('contactForm').reset(); // تفريغ النموذج
    return true;
}

// --- معالجة صفحة التفاصيل (event.html) لجعلها تبدو ديناميكية ---
if (document.getElementById('eventTitle')) {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('id')) || 1; // الافتراضي هو الـ ID رقم 1

    const currentEvent = mockEvents.find(e => e.id === eventId);

    if (currentEvent) {
        document.getElementById('eventTitle').innerText = currentEvent.title;
        document.getElementById('eventDate').innerText = التاريخ ${new Date(currentEvent.date).toLocaleDateString('ar-EG')};
        document.getElementById('eventLocation').innerText = المكان: ${currentEvent.location};
        document.getElementById('eventCategory').innerText = currentEvent.category;
        document.getElementById('eventDescription').innerText = currentEvent.desc + " هذا هو وصف كامل ومفصل للفعالية التي تم اختيارها، ويتم جلب بياناتها بناءً على الـ ID الخاص بها من البيانات الوهمية المتاحة.";
        document.getElementById('eventImage').src = currentEvent.img;
        document.title = ${currentEvent.title} - دليل فعاليات SVU;
    }
}