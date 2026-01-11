import {
  Box,
  type BoxProps,
  Circle,
  Flex,
  type FlexProps,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { type ReactNode } from 'react';

interface CustomChartsProps {
  peakValue?: number;
  data: Array<any>;
  setHoveredBar?: (
    hoverData: { label: string; value: number; id: any } | null
  ) => void;
  HoveredComponent?: ReactNode;
  hoveredBar?: {
    label: string;
    value: number;
    id: any;
    unproductive?: number;
    brainstorming?: number;
    productive?: number;
    coding?: number;
  };
  outerBarProps?: BoxProps;
  innerBarProps?: BoxProps;
  stackProps?: BoxProps;
  flexProps?: FlexProps;
  onBarClick?: (data: any) => void;
  clickedBar?: any;
}
export default function SingleBarChart({
  peakValue = 10000,
  data,
  setHoveredBar,
  // HoveredComponent,
  hoveredBar,
  outerBarProps,
  innerBarProps,
  stackProps,
  flexProps,
  onBarClick,
  clickedBar,
}: CustomChartsProps) {
  // const [hoveredBar, setHoveredBar] = useState<{
  //   key: string;
  //   value: any;
  //   breakDown: any;
  // } | null>(null);
  const maxValue = Math.max(
    ...Object.values(data).map((item) => Number(item.value))
  );

  // console.log('singlechartdata is ', data);

  return (
    <div>
      <Flex
        gap={'.7rem'}
        alignItems={'top'}
        // justifyContent={'space-between'}
        maxW={'30rem'}
        // border={'1px solid blue'}
        {...flexProps}
      >
        {data?.map((item, index) => {
          const peakValueBar = maxValue + peakValue;

          // console.log('item', item);
          // // eslint-disable-next-line no-console

          // console.log('productive time', productivePercentage);
          // // eslint-disable-next-line no-console
          // console.log('brainstorming time', brainstormingPercentage);
          // // eslint-disable-next-line no-console
          // console.log('unproductive time', unproductivePercentage);
          // // eslint-disable-next-line no-console
          // console.log('coding time', codingPercentage);
          return (
            <Stack
              // flex={1}
              gap={'.8rem'}
              key={`${item.label} ${index}`}
              alignItems={'center'}
              onClick={() => onBarClick?.(item)}
              cursor={'pointer'}
              // pos={'relative'}
              // opacity={item?.label === clickedBar?.label ? '0.1' : 1}
              {...stackProps}
            >
              <Box
                bg={'#EEEEEE'}
                rounded={'61.5rem'}
                height={'13rem'}
                width={'100%'}
                position={'relative'}
                overflow={'visible'}
                onMouseEnter={() => setHoveredBar?.(item)}
                onMouseLeave={() => setHoveredBar?.(null)}
                {...outerBarProps}
              >
               
      
              </Box>

              {/* {} */}
              {React.isValidElement(item.label) ? (
                item.label
              ) : (
                <Text color="#888888" fontSize=".7rem">
                  {item.label}
                </Text>
              )}
            </Stack>
          );
        })}
      </Flex>
    </div>
  );
}