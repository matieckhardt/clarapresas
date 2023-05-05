const requireContext = require.context("./stills/", false, /\.jpg$/);
const webmFiles = requireContext.keys().map(requireContext);

export const images = webmFiles;

const stillsByIndex = (index) => images[index % images.length];

export default stillsByIndex;
