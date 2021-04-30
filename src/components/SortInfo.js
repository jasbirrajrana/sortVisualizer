import React from "react";
import PropTypes from "prop-types";
import { Heading } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
const SortInfo = ({
  title,
  code,
  description,
  worstCase,
  avgCase,
  bestCase,
  space,
}) => {
  console.log(code);
  return (
    <>
      {code === undefined ? null : (
        <>
          <div className="SortInfo">
            <div className="SortInfo__Col-1">
              <Heading isTruncated m="1">
                {title ? title : "Select Algorithm"}
              </Heading>
              <SyntaxHighlighter language="javascript" style={coldarkDark}>
                {code}
              </SyntaxHighlighter>
            </div>
            <div className="SortInfo__Col-2">
              <Heading>Performance</Heading>
              <Stack>
                <Text>
                  Worst-case time complexity
                  <code>{worstCase}</code>
                </Text>
                <Text>
                  Average time complexity
                  <code>{avgCase}</code>
                </Text>
                <Text>
                  Best-case time complexity
                  <code>{bestCase}</code>
                </Text>
                <Text>
                  Worst-case space complexity <code>{space}</code>
                </Text>
              </Stack>
            </div>
          </div>
        </>
      )}
      {/* <div className="SortInfo">
        <hr />
        <Heading p="2" isTruncated>
          {title ? title : "Select Algorithm"}
        </Heading>
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter> */}
      {/* <div className="SortInfo__Body">
        <article className="SortInfo__Article">
          {description ? (
            description
          ) : (
            <Text fontSize="xl">
              You must select an algorithm before you can visualize it's
              execution on an array of numbers.
            </Text>
          )}
        </article> */}

      {/* <aside className="SortInfo__Aside">
          <Heading isTruncated fontSize="2xl">
            Performance
          </Heading>
          <Stack>
            <Text>
              Worst-case time complexity
              <code>{worstCase}</code>
            </Text>
            <Text>
              Average time complexity
              <code>{avgCase}</code>
            </Text>
            <Text>
              Best-case time complexity
              <code>{bestCase}</code>
            </Text>
            <Text>
              Worst-case space complexity
              <code>{space}</code>
            </Text>
          </Stack>
        </aside> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

SortInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.object,
  worstCase: PropTypes.object,
  avgCase: PropTypes.object,
  bestCase: PropTypes.object,
  space: PropTypes.object,
};

export default SortInfo;
