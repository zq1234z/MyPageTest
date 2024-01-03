import React from "react";
import {Form,Title} from "../pages/MyPageStyle"
import { UserProfile } from "../components/UserProfile/UserProfile";
import { Table } from '../components/Table/Table'

export const MyPage = () => {
  return(
    <Form>
      <Title>My Page</Title>
      <Table />
    </Form>
  )
}