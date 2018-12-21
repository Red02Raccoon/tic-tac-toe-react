import React from "react";

import { Title, Text } from "../../../components/Layout";
import Modal from "./Modal";

export default props => {
  return (
    <Modal {...props}>
      <Title mB="25px" textCenter>
        Congratulations!
      </Title>
      <Text>
        <b>{props.winner}-player</b>, you are winner!
      </Text>
    </Modal>
  );
};
