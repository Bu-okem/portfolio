export const useVisiblity = () => useState("isVisible", () => false);
export const useAnimationText = () => useState("animationText", () => "");
export const useAnimationTextIndex = () =>
	useState("animationTextIndex", () => 0);
export const useLoadingIndicator = () => useState("isLoading", () => true);
