export const Badge = ({ text, ...props }) => (
  <span
    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${props.className}`}
  >
    {text}
  </span>
);
