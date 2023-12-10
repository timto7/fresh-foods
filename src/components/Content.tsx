import styled from 'styled-components';

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1366px;
  padding: 0 2em;

  @media (max-width: 640px) {
    padding: 0 1em;
  }
`;

export default Content;

// const Title = styled.span`
//   color: ${(props) => props.theme.colors.text.main};
//   font-size: 14px;
//   font-weight: 800;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

// const Content = ({ children }: PropsWithChildren) => {
//   return (
//     <div
//       style={{
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         maxWidth: 1366,
//         padding: '0 2em',
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// export default Content;
