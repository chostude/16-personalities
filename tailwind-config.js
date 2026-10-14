tailwind.config = {
      theme: {
        extend: {
          colors: {
            kirliban: {
              glass: 'rgba(255, 255, 255, 0.45)',
              glassBorder: 'rgba(255, 255, 255, 0.65)',
              card: 'rgba(255, 255, 255, 0.55)',
              dark: '#2c3539',
              teal: '#4299e1',
              mint: '#38b2ac',
              purple: '#805ad5',
              accent: '#319795'
            }
          },
          fontFamily: {
            sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
          },
          boxShadow: {
            'bubble': '0 20px 40px 0 rgba(31, 38, 135, 0.07), 0 8px 16px 0 rgba(255, 255, 255, 0.4) inset',
            'bubble-glow': '0 10px 30px rgba(100, 200, 255, 0.25), 0 0 15px rgba(255,255,255,0.8) inset',
            'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.08)',
          }
        }
      }
    }
