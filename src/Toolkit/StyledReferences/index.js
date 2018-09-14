import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledReferences = styled.div`
  font-weight: 500;
  font-size: 17px;
  margin-top: 10px;
  text-align: right;

  a{
    margin-bottom: 10px;
    display: block;

    &:focus,
    &:active{
      text-decoration: none;
    }
  }
`;

const References = ({ references }) => (
  <StyledReferences>
    {
      references.map(reference => (
        <a
          href={reference.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {reference.name}
        </a>
      ))
    }
  </StyledReferences>
);

References.propTypes = {
  references: PropTypes.string.isRequired,
};

export default References;
