const requireContext = require.context("./videos/films", false, /\.webm$/);
const webmFiles = requireContext.keys().map(requireContext);

export const images = webmFiles;

const videoByIndex = (index) => images[index % images.length];

export default videoByIndex;
