import { useEffect, useRef, useState } from "react";
import * as Styled from "./styles";
import { Option } from "./types";

const Dropdown = (props: {
  options: Option[];
  onOptionClick: (option: Option) => void;
}) => {
  const { options, onOptionClick } = props;
  return (
    <Styled.Options>
      {options.map((option, index) => {
        return (
          <Styled.Option
            key={index}
            onClick={() => {
              onOptionClick(option);
            }}
          >
            {option.label}
          </Styled.Option>
        );
      })}
    </Styled.Options>
  );
};

type Props = {
  value: Option | null;
  onChange: (value: unknown) => void;
  options: Option[];
};

export const Select = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null!);
  const { value, onChange, options } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setIsOpen(false);
    onChange(option.value);
  };

  const handleOffClick = (event: MouseEvent) => {
    event.stopPropagation();

    if (!ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOffClick);
    return () => {
      window.removeEventListener("click", handleOffClick);
    };
  }, []);

  return (
    <Styled.Container ref={ref}>
      <Styled.SelectedOption onClick={handleClick}>
        {value?.label}
      </Styled.SelectedOption>
      {isOpen && (
        <Dropdown onOptionClick={handleOptionClick} options={options} />
      )}
    </Styled.Container>
  );
};
