const fs = require('fs');

// Читаем содержимое файла Button.css
fs.readFile('Button.css', 'utf8', function(err, data) {
    if (err) {
        console.error('Ошибка при чтении файла Button.css:', err);
        return;
    }

    // Ищем все идентификаторы с их стилями
    const regex = /((?:#[\w:]+,?\s*?)+)\s*{([^}]+)}/g;
    let match;
    let result = '';
    const dict = new Map();

    while ((match = regex.exec(data)) !== null) {
        const id_list = match[1].split(',');
        const styles = match[2];
        
        for (const id of id_list) {
            const cleanedId = id.trim().replace(/^#/, ''); // Удаляем пробелы и символ "#"
            
            if (dict.has(cleanedId)) {
                dict.set(cleanedId, dict.get(cleanedId) + styles);
            } else {
                dict.set(cleanedId, styles);
            }
        }
    }

    dict.forEach((value, key) => {
        result += `export const ${key} =styled.div\` ${value} \`;\n`;
    });

    // Записываем результаты в файл RT-Styles.tsx
    fs.writeFile('RT-Styles.tsx', result, function(err) {
        if (err) {
            console.error('Ошибка при записи файла RT-Styles.tsx:', err);
            return;
        }
        console.log('Результаты записаны в файл RT-Styles.tsx');
    });
});
