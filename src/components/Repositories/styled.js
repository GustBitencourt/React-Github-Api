import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 1rem;
  width: 100%;
  margin-top: 1rem;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 0.25rem;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#fff";
  margin: 0.5rem;
  &:focus {
    outline: none;
  }
  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 1rem;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -0.3125rem;
  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;