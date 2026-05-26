import os
import re

# Diccionario exhaustivo de reemplazos de mojibake
replacements = {
    # Acentos simples
    'Ã³': 'ó', 'Ãº': 'ú', 'Ã©': 'é', 'Ã¡': 'á', 'Ã±': 'ñ', 
    'Ã"': 'Ó', 'Ã': 'Á', 'Ã': 'É', 'Ã': 'Í',
    'àƒ§': 'ç', 'Ã§': 'ç',
    # Signos de puntuación
    'Â¡': '¡', 'Â¿': '¿', 'Â·': '·', 'Â»': '»', 'Â«': '«',
    # Caracteres especiales de comillas
    'Ââ€œ': '"', 'Ââ€™': "'", 'â€œ': '"', 'â€™': "'", 'â€˜': "'",
    # Dashes y símbolos
    'â€"': '–', 'â€"': '—', 'â€œ': '"', 'â€': '"', 'â€' ': ' - ', 'â€"': '–',
    # Bullets y puntos
    '€¢': '•', '€„': '†', '€…': '…',
    # Emojis dañados - Salud
    'ðŸ¥ ': '🏥 ', 'ðŸ¥': '💉', 'ðŸ§¬': '🧬',
    # Emojis dañados - Audio
    'ðŸ'‚ ': '👂 ', 'ðŸ'ˆ': '👈', 'ðŸ'‰': '👉', 'ðŸ'†': '👅',
    # Emojis dañados - Personas
    'ðŸ'¨€š•ï¸': '👨‍⚕️', 'ðŸ'¨': '👨', 'ðŸ'©': '👩',
    # Emojis dañados - Sísmbolos
    'ðŸ˜Š': '😊', 'ðŸ¤': '🤔', 'ðŸ˜¢': '😢', 'ðŸ˜ ': '😠',
    # Emojis dañados - Documentos
    'ðŸ"': '📋', 'ðŸ"…': '📅', 'ðŸ"‹': '📋', 'ðŸ"': '📄', 'ðŸ"§': '📧',
    # Emojis dañados - Comunicación
    'ðŸ"ž': '📞', 'ðŸ"¬': '📬', 'ðŸ"¢': '📢', 'ðŸ'¬': '💬', 'ðŸ—¨': '🗨',
    # Emojis dañados - Viajes
    'ðŸš—': '🚗', 'ðŸš•': '🚕', 'ðŸš›': '🚛', 'ðŸ"': '📍', 'ðŸ—�': '🗺',
    # Emojis dañados - Otros
    'ðŸ'¡': '💡', 'ðŸŒ€': '🌀', 'ðŸ¥': '💥', 'ðŸš¨': '🚨', 'ðŸ"¢': '📢',
    'ðŸ•': '🕐', 'ðŸ—£ï¸': '🗣️', 'ðŸ—£': '🗣', 'ðŸ'¢': '💢',
    # Caracteres numéricos con emoji
    '1ï¸ƒ£': '1️⃣', '2ï¸ƒ£': '2️⃣', '3ï¸ƒ£': '3️⃣',
    # Palabras completas
    'MÃ‰DICA': 'MÉDICA', 'œ…': '✅', 'ðŸ'¤': '💤', 'ðŸ'¤': '🤔',
    # Limpiar caracteres sobrantes
    'ï¸': '', 'ï¸ƒ£': '️⃣', 'ï»¿': '', 'œ': '',
    # Direcciones específicas
    '#86€"56': '#86-56', '€"56': '-56',
}

def fix_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_len = len(content)
        
        for old, new in replacements.items():
            content = content.replace(old, new)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        if original_len != len(content):
            print(f"✓ {filepath}")
            return True
        
        return False
    except Exception as e:
        print(f"✗ {filepath}: {str(e)}")
        return False

# Procesar archivos
src_path = "src"
count = 0
fixed = 0
for root, dirs, files in os.walk(src_path):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.jsx', '.js')):
            filepath = os.path.join(root, file)
            count += 1
            if fix_file(filepath):
                fixed += 1

print(f"\n✓ {fixed} archivos corregidos de {count} procesados")
