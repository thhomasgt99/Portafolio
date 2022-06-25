import { useState } from "react";

const useInitialState = () => {
	const [state, setState] = useState(false)
	return (
		{
			state,
			setState,
		}
	)
}

export default useInitialState