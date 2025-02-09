
  const colorSchemes = [
  {
    colors: ["#FF6B6B", "#FF8E72", "#FFA07A"], // أحمر قرمزي، برتقالي مرجاني، سلمون فاتح
    name: "أحمر قرمزي (FF6B6B)، برتقالي مرجاني (FF8E72)، سلمون فاتح (FFA07A)",
    category: "مرحة",
    code: "#FF6B6B, #FF8E72, #FFA07A",
    isGradient: false
  },
  {
    colors: ["#2C3E50", "#34495E", "#5D6D7E"], // أزرق داكن، رمادي أزرق، رمادي فولاذي
    name: "أزرق داكن (2C3E50)، رمادي أزرق (34495E)، رمادي فولاذي (5D6D7E)",
    category: "فخمة",
    code: "#2C3E50, #34495E, #5D6D7E",
    isGradient: false
  },
  {
    colors: ["#32CD32", "#228B22", "#006400"], // أخضر ليموني، أخضر غابات، أخضر داكن
    name: "أخضر ليموني (32CD32)، أخضر غابات (228B22)، أخضر داكن (006400)",
    category: "هادئ",
    code: "#32CD32, #228B22, #006400",
    isGradient: false
  },
  {
    colors: ["#FF6347", "#FF4500", "#FFD700"], // طماطم، برتقالي، ذهبي
    name: "طماطم (FF6347)، برتقالي (FF4500)، ذهبي (FFD700)",
    category: "مرحة",
    code: "#FF6347, #FF4500, #FFD700",
    isGradient: false
  },
  {
    colors: ["#00BFFF", "#1E90FF", "#4682B4"], // أزرق سماوي، أزرق ملكي، أزرق فولاذي
    name: "أزرق سماوي (00BFFF)، أزرق ملكي (1E90FF)، أزرق فولاذي (4682B4)",
    category: "فخمة",
    code: "#00BFFF, #1E90FF, #4682B4",
    isGradient: false
  },
  {
    colors: ["#8A2BE2", "#7B68EE", "#6A5ACD"], // أرجواني، أرجواني فاتح، أزرق أرجواني
    name: "أرجواني (8A2BE2)، أرجواني فاتح (7B68EE)، أزرق أرجواني (6A5ACD)",
    category: "فخمة",
    code: "#8A2BE2, #7B68EE, #6A5ACD",
    isGradient: false
  },
  {
    colors: [], // تدرج من الأزرق إلى الأخضر
    name: "تدرج لوني (أزرق إلى أخضر)",
    category: "تدرج لوني",
    code: "linear-gradient(45deg, #00BFFF, #32CD32)",
    isGradient: true,
    gradient: "linear-gradient(45deg, #00BFFF, #32CD32)"
  },
  {
    colors: [], // تدرج من الوردي إلى الأرجواني
    name: "تدرج لوني (وردي إلى أرجواني)",
    category: "تدرج لوني",
    code: "linear-gradient(45deg, #FF4081, #8E44AD)",
    isGradient: true,
    gradient: "linear-gradient(45deg, #FF4081, #8E44AD)"
  },
  {
    colors: ["#FF1493", "#FF69B4", "#FFB6C1"], // وردي غامق، وردي ساخن، وردي فاتح
    name: "وردی غامق (FF1493)، وردي ساخن (FF69B4)، وردي فاتح (FFB6C1)",
    category: "مرحة",
    code: "#FF1493, #FF69B4, #FFB6C1",
    isGradient: false
  },
  {
    colors: ["#F0E68C", "#FFD700", "#FF8C00"], // أصفر كريمي، ذهبي، برتقالي
    name: "أصفر كريمي (F0E68C)، ذهبي (FFD700)، برتقالي (FF8C00)",
    category: "مرحة",
    code: "#F0E68C, #FFD700, #FF8C00",
    isGradient: false
  },
  {
    colors: [], // تدرج من الأحمر إلى البرتقالي
    name: "تدرج لوني (أحمر إلى برتقالي)",
    category: "تدرج لوني",
    code: "linear-gradient(45deg, #FF6347, #FF4500)",
    isGradient: true,
    gradient: "linear-gradient(45deg, #FF6347, #FF4500)"
  },
  {
    colors: ["#A0522D", "#D2691E", "#8B4513"], // بني، بني محمر، بني داكن
    name: "بني (A0522D)، بني محمر (D2691E)، بني داكن (8B4513)",
    category: "هادئ",
    code: "#A0522D, #D2691E, #8B4513",
    isGradient: false
  },
  {
    colors: ["#008080", "#20B2AA", "#40E0D0"], // تركوازي، تركوازي فاتح، فيروزي
    name: "تركوازي (008080)، تركوازي فاتح (20B2AA)، فيروزي (40E0D0)",
    category: "هادئ",
    code: "#008080, #20B2AA, #40E0D0",
    isGradient: false
  },
  {
    colors: ["#98FB98", "#90EE90", "#32CD32"], // أخضر فاتح، أخضر فاتح جدًا، أخضر ليموني
    name: "أخضر فاتح (98FB98)، أخضر فاتح جدًا (90EE90)، أخضر ليموني (32CD32)",
    category: "هادئ",
    code: "#98FB98, #90EE90, #32CD32",
    isGradient: false
  },
  {
    colors: [], // تدرج من الأزرق الداكن إلى الأزرق الفاتح
    name: "تدرج لوني (أزرق داكن إلى أزرق فاتح)",
    category: "تدرج لوني",
    code: "linear-gradient(45deg, #2C3E50, #3498DB)",
    isGradient: true,
    gradient: "linear-gradient(45deg, #2C3E50, #3498DB)"
  }
   ];;

// يمكنك إضافة المزيد من الألوان لكل فئةتتردد في إخباري!







function displayColorSchemes(schemes) {
  const container = document.getElementById("color-container");
  container.innerHTML = ''; // مسح المحتوى القديم

  schemes.forEach((scheme, index) => {
    const colorFrame = document.createElement("div");
    colorFrame.classList.add("color-frame");

    if (scheme.isGradient) {
      const colorBox = document.createElement("div");
      colorBox.classList.add("color-box-gradient");
      colorBox.style.background = scheme.gradient;
      colorFrame.appendChild(colorBox);
    } else {
      scheme.colors.forEach(color => {
        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");
        colorBox.style.backgroundColor = color;
        colorFrame.appendChild(colorBox);
      });
    }

    const colorInfo = document.createElement("div");
    colorInfo.classList.add("color-info");
    colorInfo.innerHTML = `
      <span>${index + 1}. ${scheme.name}</span>
      <br><span>${scheme.category}</span>
      ${scheme.company !== "None" ? `<span>${scheme.company}</span>` : ""}
      <br><span>${scheme.code}</span>
    `;
    colorFrame.appendChild(colorInfo);

    colorFrame.addEventListener("click", () => {
      openModal(scheme);
    });

    container.appendChild(colorFrame);
  });
}

// البحث
function searchColors() {
  const searchInput = document.getElementById("search-input").value.toLowerCas();
  const filteredSchemes = colorSchemes.filter(scheme => {
    const nameMatch = scheme.name.toLowerCase().includes(searchInput);
    const categoryMatch = scheme.category.toLowerCase().includes(searchInput);
    const companyMatch = scheme.company.toLowerCase().includes(searchInput);
    const codeMatch = scheme.code.includes(searchInput);
    return nameMatch || categoryMatch || companyMatch || codeMatch;
  });

  displayColorSchemes(filteredSchemes);
  showSuggestions(searchInput);
}

// فلترة الألوان حسب الفئة
function filterByCategory(category) {
  const filteredSchemes = colorSchemes.filter(scheme => scheme.category === category);
  displayColorSchemes(filteredSchemes);
}

// إظهار جميع الألوان
function clearFilters() {
  displayColorSchemes(colorSchemes);
}

// إظهار اقتراحات البحث
function showSuggestions(input) {
  const suggestionsContainer = document.getElementById("suggestions");
  suggestionsContainer.innerHTML = '';

  if (input.length > 0) {
    const suggestions = colorSchemes.filter(scheme => 
      scheme.name.toLowerCase().includes(input) || 
      scheme.category.toLowerCase().includes(input) || 
      scheme.code.includes(input));
    suggestions.forEach(scheme => {
      const suggestion = document.createElement("div");
      suggestion.textContent = scheme.name;
      suggestionsContainer.appendChild(suggestion);
      suggestion.addEventListener("click", () => {
        document.getElementById("search-input").value = scheme.name;
        searchColors();
      });
    });
  }
}

// نسخ اللون إلى الحافظة
function copyToClipboard(color) {
  const textArea = document.createElement("textarea");
  textArea.value = color; // تحديد القيمة التي سيتم نسخها
  document.body.appendChild(textArea);
  textArea.select(); // تحديد النص
  document.execCommand("copy"); // نسخ النص المحدد
  document.body.removeChild(textArea); // إزالة العنصر المؤقت
}

// إظهار إشعار النسخ
function showCopyNotification() {
  const notification = document.createElement("div");
  notification.classList.add("copy-notification");
  notification.innerText = "تم نسخ اللون إلى الحافظة!"; // الرسالة
  document.body.appendChild(notification);

  // إخفاء الإشعار بعد 3 ثواني
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// فتح المودال عند النقر على فريم
function openModal(scheme) {
  const modal = document.getElementById("colorModal");
  const modalContainer = document.getElementById("color-modal-container");

  // مسح المحتوى القديم داخل المودال
  modalContainer.innerHTML = '';

  if (scheme.isGradient) {
    const gradientBox = document.createElement("div");
    gradientBox.classList.add("color-box-modal");
    gradientBox.style.background = scheme.gradient;
    modalContainer.appendChild(gradientBox);
  } else {
    scheme.colors.forEach(color => {
      const colorBox = document.createElement("div");
      colorBox.classList.add("color-box-modal");
      colorBox.style.backgroundColor = color;

      // إضافة وظيفة النسخ عند النقر على اللون داخل المودال فقط
      colorBox.addEventListener("click", () => {
        copyToClipboard(color);
        showCopyNotification();
      });

      modalContainer.appendChild(colorBox);
    });
  }

  const colorInfo = document.createElement("div");
  colorInfo.classList.add("color-info");
  colorInfo.innerHTML = `
    <span>${scheme.name}</span>
    <br><span>${scheme.category}</span>
    ${scheme.company !== "None" ? `<span>${scheme.company}</span>` : ""}
    <br><span>${scheme.code}</span>
  `;
  modalContainer.appendChild(colorInfo);

  const copyBtn = document.createElement("button");
  copyBtn.textContent = "نسخ اللون إلى الحافظة";
  copyBtn.addEventListener("click", () => {
    copyToClipboard(scheme.code);
    showCopyNotification();
  });
  modalContainer.appendChild(copyBtn);

  const copyAllBtn = document.createElement("button");
  copyAllBtn.textContent = "نسخ جميع الألوان";
  copyAllBtn.addEventListener("click", () => {
    copyToClipboard(scheme.colors.join(", "));
    showCopyNotification();
  });
  modalContainer.appendChild(copyAllBtn);

  const closeModalBtn = document.createElement("button");
  closeModalBtn.textContent = "إغلاق";
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  modalContainer.appendChild(closeModalBtn);

  modal.style.display = "flex";
}

// إغلاق النافذة المنبثقة عند النقر على الإغلاق
document.getElementById("close-modal-btn").addEventListener("click", () => {
  document.getElementById("colorModal").style.display = "none";
});

// البدء في عرض الألوان عند تحميل الصفحة
displayColorSchemes(colorSchemes);