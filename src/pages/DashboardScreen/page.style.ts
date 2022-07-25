import styled from "styled-components";
import { StyleConstants } from "core/styles/StyleConstants";

export const PageContainer = styled.section`
  padding: 80px 50px;
  height: 100%;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: flex-end;

  & > div {
    margin-right: 10px;

    &:first-child {
      border-right: 1px solid #B8B8B8;
      padding-right: 10px;
    }
  }
`;

export const Categories = styled.ul`
  display: flex;
  padding: 0;
  margin: 30px 0 0;
`;

export const CategoryItem = styled.li`
  cursor: pointer;
  margin: 0 50px 0 0;
  padding-left: 0;

  caption {
    text-align: center;
  }
`;

export const Listings = styled.ul`
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li``

