<template>
  <div class="fixed right-5 top-1/2 -translate-y-1/2 z-40">
    <div
      class="theme-switcher bg-background border border-accent border-solid rounded-sm p-3 flex flex-col items-center">
      <div
        class="theme-name text-center text-xs mb-2 text-secondary-text font-medium hidden">
        {{ currentThemeName }}
      </div>

      <div class="flex flex-col items-end gap-[18px]">
        <!-- Dark icon -->
        <span class="theme-icon dark mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21Z" />
          </svg>
        </span>

        <div class="relative h-48 flex items-center">
          <!-- Custom slider track -->
          <div
            class="custom-slider-container relative h-full flex items-center">
            <!-- Theme markers -->
            <div
              class="theme-markers flex flex-col justify-between h-full py-1 mr-2">
              <div
                v-for="(marker, index) in themeMarkers"
                :key="index"
                class="theme-marker h-1 w-1 rounded-full"
                :class="{
                  'bg-accent': themePosition >= 100 - marker.position,
                  'bg-accent/30': themePosition < 100 - marker.position,
                }"></div>
            </div>

            <!-- Custom track -->
            <div class="custom-track w-1 h-full rounded-full overflow-hidden">
              <!-- Filled portion (dynamic height based on themePosition) -->
              <div
                class="custom-track-fill bg-accent rounded-full w-full"
                :style="{ height: `${themePosition}%` }"></div>
            </div>

            <!-- Custom thumb that moves with the slider -->
            <div
              class="custom-thumb absolute left-0 -ml-1.5 w-4 h-4 rounded-full bg-accent border-2 border-background shadow-md cursor-pointer transform transition-transform hover:scale-110"
              :style="{ bottom: `calc(${themePosition}% - 8px)` }"
              @mousedown="startDrag"
              @touchstart="startDrag"></div>

            <!-- Invisible actual range input for accessibility -->
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              v-model="themePosition"
              @input="updateThemeFromSlider"
              class="sr-only"
              aria-label="Theme slider"
              orient="vertical" />
          </div>
        </div>
        <!-- Light icon -->
        <span class="theme-icon light mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 17q-2.075 0-3.538-1.463T7 12q0-2.075 1.463-3.538T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.463 3.538T12 17ZM2 13q-.425 0-.713-.288T1 12q0-.425.288-.713T2 11h2q.425 0 .713.288T5 12q0 .425-.288.713T4 13H2Zm18 0q-.425 0-.713-.288T19 12q0-.425.288-.713T20 11h2q.425 0 .713.288T23 12q0 .425-.288.713T22 13h-2Zm-8-8q-.425 0-.713-.288T11 4V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v2q0 .425-.288.713T12 5Zm0 18q-.425 0-.713-.288T11 22v-2q0-.425.288-.713T12 19q.425 0 .713.288T13 20v2q0 .425-.288.713T12 23ZM5.65 7.05L4.575 6q-.3-.275-.288-.7t.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7t-.275.7q-.275.3-.687.288T5.65 7.05ZM18 19.425l-1.05-1.075q-.275-.3-.275-.713t.275-.687q.275-.3.688-.287t.712.287L19.425 18q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.288-.687t.288-.713L18 4.575q.275-.3.7-.288t.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275t-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.712-.275t.688.275q.3.275.288.688t-.288.712L6 19.425q-.275.3-.7.288t-.725-.288Z" />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Define all available themes including light and dark
const allThemes = [
  {
    name: 'light',
    position: 0, // 0% on the slider
    vars: {
      background: 'oklch(0.98 0 0)',
      foreground: 'oklch(0.2 0 0)',
      accent: 'oklch(0.72 0 0)',
      'secondary-text': 'oklch(0.556 0 0)',
      border: 'oklch(0.85 0 0)',
    },
  },
  {
    name: 'sepia',
    position: 25, // 25% on the slider
    vars: {
      background: 'oklch(0.97 0.03 83.4)',
      foreground: 'oklch(0.2 0.03 83.4)',
      accent: 'oklch(0.85 0.12 83.4)',
      'secondary-text': 'oklch(0.5 0.03 83.4)',
      border: 'oklch(0.85 0.03 83.4)',
    },
  },
  {
    name: 'ocean',
    position: 50, // 50% on the slider
    vars: {
      background: 'oklch(0.96 0.03 220)',
      foreground: 'oklch(0.2 0.06 220)',
      accent: 'oklch(0.85 0.12 220)',
      'secondary-text': 'oklch(0.5 0.06 220)',
      border: 'oklch(0.85 0.03 220)',
    },
  },
  {
    name: 'lavender',
    position: 75, // 75% on the slider
    vars: {
      background: 'oklch(0.94 0.04 300)',
      foreground: 'oklch(0.2 0.06 300)',
      accent: 'oklch(0.85 0.12 300)',
      'secondary-text': 'oklch(0.5 0.06 300)',
      border: 'oklch(0.85 0.03 300)',
    },
  },
  // {
  //   name: 'green',
  //   position: 87, // 87% on the slider
  //   vars: {
  //     background: 'oklch(0.32 0.0229 173.56)',
  //     foreground: 'oklch(0.94 0.0225 151.64)',
  //     accent: 'oklch(0.58 0.0753 153.78)',
  //     'secondary-text': 'oklch(0.5 0.06 300)',
  //     border: 'oklch(0.58 0.0753 153.78)',
  //   },
  // },
  {
    name: 'dark',
    position: 100, // 100% on the slider
    vars: {
      background: 'oklch(0.23 0 0)',
      foreground: 'oklch(0.985 0 0)',
      accent: 'oklch(0.47 0 0)',
      'secondary-text': 'oklch(0.7 0 0)',
      border: 'oklch(0.47 0 0)',
    },
  },
];

// Create markers for the slider
const themeMarkers = allThemes.map((theme) => ({
  name: theme.name,
  position: theme.position,
}));

// Current theme and slider position
const currentTheme = ref('light');
const themePosition = ref(0); // Start at light theme (0%)
const currentThemeName = ref('Light');

// Custom slider drag functionality
const isDragging = ref(false);
const sliderHeight = ref(0);

const startDrag = (event) => {
  event.preventDefault();
  isDragging.value = true;

  // Get the slider container height for calculations
  const sliderContainer = event.target.closest('.custom-slider-container');
  if (sliderContainer) {
    sliderHeight.value = sliderContainer.clientHeight;
  }

  // Add event listeners for drag and release
  document.addEventListener('mousemove', handleDrag);
  document.addEventListener('touchmove', handleDrag, { passive: false });
  document.addEventListener('mouseup', endDrag);
  document.addEventListener('touchend', endDrag);

  // Initial drag position calculation
  handleDrag(event);
};

const handleDrag = (event) => {
  if (!isDragging.value || sliderHeight.value === 0) return;

  // Prevent default to stop scrolling on touch devices
  if (event.cancelable) {
    event.preventDefault();
  }

  // Get the slider container for position calculations
  const sliderContainer = document.querySelector('.custom-slider-container');
  if (!sliderContainer) return;

  // Get the position relative to the slider
  const rect = sliderContainer.getBoundingClientRect();
  const clientY = event.touches ? event.touches[0].clientY : event.clientY;

  // Calculate position as percentage (inverted for bottom-to-top)
  let percentage = ((rect.bottom - clientY) / rect.height) * 100;

  // Clamp the percentage between 0 and 100
  percentage = Math.max(0, Math.min(100, percentage));

  // Update the theme position
  themePosition.value = percentage;
  updateThemeFromSlider();
};

const endDrag = () => {
  isDragging.value = false;

  // Remove event listeners
  document.removeEventListener('mousemove', handleDrag);
  document.removeEventListener('touchmove', handleDrag);
  document.removeEventListener('mouseup', endDrag);
  document.removeEventListener('touchend', endDrag);
};

// Calculate interpolated values between two themes based on a position (0-100)
const interpolateTheme = (position) => {
  // Find the two themes to interpolate between
  let lowerTheme = allThemes[0];
  let upperTheme = allThemes[allThemes.length - 1];

  for (let i = 0; i < allThemes.length - 1; i++) {
    if (
      position >= allThemes[i].position &&
      position <= allThemes[i + 1].position
    ) {
      lowerTheme = allThemes[i];
      upperTheme = allThemes[i + 1];
      break;
    }
  }

  // Calculate how far between the two themes we are (0-1)
  const range = upperTheme.position - lowerTheme.position;
  const progress = range === 0 ? 0 : (position - lowerTheme.position) / range;

  // Update current theme name based on proximity
  if (progress < 0.2) {
    currentThemeName.value =
      lowerTheme.name.charAt(0).toUpperCase() + lowerTheme.name.slice(1);
  } else if (progress > 0.8) {
    currentThemeName.value =
      upperTheme.name.charAt(0).toUpperCase() + upperTheme.name.slice(1);
  } else {
    currentThemeName.value = `${
      lowerTheme.name.charAt(0).toUpperCase() + lowerTheme.name.slice(1)
    } → ${upperTheme.name.charAt(0).toUpperCase() + upperTheme.name.slice(1)}`;
  }

  // Get all unique CSS variable names from both themes
  const allVars = new Set();
  Object.keys(lowerTheme.vars).forEach((key) => allVars.add(key));
  Object.keys(upperTheme.vars).forEach((key) => allVars.add(key));

  // For each variable, interpolate between the two themes
  const interpolatedVars = {};
  allVars.forEach((varName) => {
    // Get the values from both themes, defaulting to the other theme if not present
    const lowerValue = lowerTheme.vars[varName] || upperTheme.vars[varName];
    const upperValue = upperTheme.vars[varName] || lowerTheme.vars[varName];

    // Parse the OKLCH values
    const lowerMatch = lowerValue.match(/oklch\(([\d.]+) ([\d.]+) ([\d.]+)\)/);
    const upperMatch = upperValue.match(/oklch\(([\d.]+) ([\d.]+) ([\d.]+)\)/);

    if (lowerMatch && upperMatch) {
      // Extract the components
      const lowerL = parseFloat(lowerMatch[1]);
      const lowerC = parseFloat(lowerMatch[2]);
      const lowerH = parseFloat(lowerMatch[3]);

      const upperL = parseFloat(upperMatch[1]);
      const upperC = parseFloat(upperMatch[2]);
      const upperH = parseFloat(upperMatch[3]);

      // Interpolate each component
      const interpolatedL = lowerL + (upperL - lowerL) * progress;
      const interpolatedC = lowerC + (upperC - lowerC) * progress;

      // Special handling for hue to ensure we go the shortest distance
      let hueDiff = upperH - lowerH;
      // Adjust for the circular nature of hue
      if (hueDiff > 180) hueDiff -= 360;
      if (hueDiff < -180) hueDiff += 360;

      const interpolatedH = (lowerH + hueDiff * progress + 360) % 360;

      // Create the interpolated OKLCH value
      interpolatedVars[varName] = `oklch(${interpolatedL.toFixed(
        3
      )} ${interpolatedC.toFixed(3)} ${interpolatedH.toFixed(1)})`;
    } else {
      // Fallback for non-OKLCH values
      interpolatedVars[varName] = progress < 0.5 ? lowerValue : upperValue;
    }
  });

  return interpolatedVars;
};

// Apply theme variables to the document
const applyThemeVars = (vars) => {
  // Reset all existing variables first
  allThemes.forEach((theme) => {
    Object.keys(theme.vars).forEach((key) => {
      document.documentElement.style.removeProperty(`--${key}`);
    });
  });

  // Apply the new variables
  Object.entries(vars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
};

// Update theme based on slider position
const updateThemeFromSlider = () => {
  const position = parseFloat(themePosition.value);
  console.log('Slider position:', position);

  // Special case for exact matches to predefined themes
  const exactTheme = allThemes.find((t) => t.position === position);
  if (exactTheme) {
    currentTheme.value = exactTheme.name;
    currentThemeName.value =
      exactTheme.name.charAt(0).toUpperCase() + exactTheme.name.slice(1);

    // Special case for dark theme
    if (exactTheme.name === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    applyThemeVars(exactTheme.vars);
  } else {
    // Remove dark class for interpolated themes
    document.documentElement.classList.remove('dark');

    // Interpolate between themes
    const interpolatedVars = interpolateTheme(position);
    applyThemeVars(interpolatedVars);
  }

  // Save theme preference
  localStorage.setItem('theme-position', position.toString());
};

// Set theme by name (for backward compatibility)
const setTheme = (themeName) => {
  const theme = allThemes.find((t) => t.name === themeName);
  if (theme) {
    themePosition.value = theme.position;
    updateThemeFromSlider();
  }
};

// Initialize theme on component mount
onMounted(() => {
  console.log('ThemeSwitcher mounted');

  // Check for saved slider position
  const savedPosition = localStorage.getItem('theme-position');

  if (savedPosition !== null) {
    // Use saved position
    themePosition.value = parseInt(savedPosition);
    console.log('Using saved position:', themePosition.value);
  } else {
    // Check for saved theme name (backward compatibility)
    const savedTheme = localStorage.getItem('theme-preference');

    if (savedTheme) {
      // Find the theme and use its position
      const theme = allThemes.find((t) => t.name === savedTheme);
      if (theme) {
        themePosition.value = theme.position;
        console.log(
          'Using saved theme:',
          savedTheme,
          'at position:',
          themePosition.value
        );
      }
    } else {
      // Use system preference
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      themePosition.value = prefersDark ? 100 : 0; // 100 for dark, 0 for light
      console.log('Using system preference:', prefersDark ? 'dark' : 'light');
    }
  }

  // Apply the theme based on the position
  updateThemeFromSlider();

  // Listen for system theme changes
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      if (
        !localStorage.getItem('theme-position') &&
        !localStorage.getItem('theme-preference')
      ) {
        themePosition.value = e.matches ? 100 : 0;
        updateThemeFromSlider();
      }
    });
});
</script>

<style scoped>
.theme-switcher {
  width: 60px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.theme-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary-text);
  transition: color 0.3s ease;
}

/* Hover effect for icons */
.theme-icon:hover {
  color: var(--accent);
  transform: scale(1.1);
}

/* Custom slider styles */
.custom-slider-container {
  position: relative;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-track {
  background-color: var(--secondary-text);
  opacity: 0.2;
  position: relative;
}

.custom-track-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  transition: height 0.2s ease;
}

.custom-thumb {
  transition: bottom 0.1s ease, transform 0.2s ease;
  z-index: 10;
}

.custom-thumb:hover {
  transform: scale(1.15);
}

.custom-thumb:active {
  transform: scale(1.2);
  box-shadow: 0 0 0 4px
    var(--accent-foreground, var(--accent), rgba(0, 0, 0, 0.1));
}

/* Theme markers */
.theme-markers {
  height: 100%;
}

.theme-marker {
  transition: all 0.3s ease;
}

.theme-name {
  min-height: 1.2em;
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Hover effect for the entire component */
.theme-switcher:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}
</style>
