/**
 * @typedef {import("@prismicio/client").Content.HomeSlice} HomeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeSlice>} HomeProps
 * @type {import("react").FC<HomeProps>}
 */
const Home = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for home (variation: {slice.variation}) Slices
    </section>
  );
};

export default Home;
