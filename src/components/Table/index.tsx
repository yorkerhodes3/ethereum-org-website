import * as React from "react"
import {
  Table as ChakraTable,
  TableContainer,
  Td,
  Th,
  Tr,
  ThemingProps,
  Tbody,
  Thead,
} from "@chakra-ui/react"
import { MDXProviderComponentsProp } from "@mdx-js/react"

interface TableProps extends ThemingProps<"Table"> {
  children: React.ReactNode
}

const Table = (props: TableProps) => {
  const { variant, ...rest } = props
  return (
    <TableContainer whiteSpace="normal">
      <ChakraTable variant={variant} {...rest} />
    </TableContainer>
  )
}

export const mdxTableComponents: MDXProviderComponentsProp = {
  table: Table,
  th: ({ align, ...rest }) => <Th textAlign={align} {...rest} />,
  td: ({ align, ...rest }) => <Td textAlign={align} {...rest} />,
  tr: (props) => <Tr {...props} />,
  tbody: (props) => <Tbody {...props} />,
  thead: (props) => <Thead {...props} />,
}

export default Table
