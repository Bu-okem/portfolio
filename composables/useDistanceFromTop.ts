export function useDistanceFromTop() {
  const distanceFromTop = ref(0);
  const distanceFromLeft = ref(0);
  const elementRef = ref(null);

  const calculateDistance = () => {
    if (elementRef.value) {
      // @ts-ignore
      const rect = elementRef.value.getBoundingClientRect();
      distanceFromTop.value = rect.top;
      distanceFromLeft.value = rect.left;
    }
  };

  onMounted(() => {
    calculateDistance();
    window.addEventListener('scroll', calculateDistance);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', calculateDistance);
  });

  return {
    elementRef,
    distanceFromTop,
    distanceFromLeft,
    calculateDistance,
  };
}
