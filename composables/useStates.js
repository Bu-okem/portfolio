export const useVisiblity = () => useState("isVisible", () => false);
export const useAnimationText = () => useState("animationText", () => "");
export const useAnimationTextIndex = () =>
	useState("animationTextIndex", () => 0);
