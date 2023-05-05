const requireContext = require.context("./videos/gifs", false, /\.gif$/);
const webmFiles = requireContext.keys().map(requireContext);

export const images = webmFiles;

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
