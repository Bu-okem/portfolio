export default function (elTargetRef, callbackFunction) {
	if (!elTargetRef) return;

	let listener = (e) => {
		if (
			e.target == elTargetRef.value ||
			e.composedPath().includes(elTargetRef.value)
		) {
			return;
		}

		if (typeof callbackFunction == "function") {
			callbackFunction();
		}
	};

	onMounted(() => {
		window.addEventListener("click", listener);
	});

	onBeforeMount(() => {
		window.removeEventListener("click", listener);
	});

	return {
		listener,
	};
}
