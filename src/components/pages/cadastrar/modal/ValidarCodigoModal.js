import * as React from "react";
import { View } from "react-native";
import {
  Modal,
  Portal,
  IconButton,
} from "react-native-paper";
import {
  StyledTitleModal,
  StyledModalContainer,
  StyledBottonContainerModal,
  StyledTopContainerModal,
  StyledButtonModal,
  StyledTextErrorModal,
} from "../style";
import Colors from "../../../../css/default/Colors";
import InputText from "../../../shared/InputText";

export default function ValidarCodigoModal(props) {
  const [codigo, setCodigo] = React.useState("");

  return (
    <Portal>
      <Modal visible={props.visible}>
        <StyledModalContainer>
          <StyledTopContainerModal>
            <IconButton
              icon="chevron-left"
              iconColor={Colors.primaryFontColor}
              size={50}
              onPress={() => props.setVisible(false)}
            />
            <StyledTitleModal variant="headlineLarge">
              Código de verificação
            </StyledTitleModal>
          </StyledTopContainerModal>
          <StyledTitleModal variant="labelLarge">
            O código de verificação foi enviado para o e-mail:
            {" " + props.email}
          </StyledTitleModal>
          <StyledBottonContainerModal>
            <InputText
              title="Código"
              height={50}
              width={350}
              placeholder="Digite o código enviado no seu e-mail"
              onChangeText={setCodigo}
              value={codigo}
            />
          </StyledBottonContainerModal>
          <StyledTextErrorModal variant="labelLarge">
            {props.message}
          </StyledTextErrorModal>
          <StyledTopContainerModal>
            <View>
              <StyledTitleModal variant="labelLarge">
                {"Enviar o codigo novamente"}
              </StyledTitleModal>
              <StyledTitleModal variant="labelLarge">
                {"2 segundos"}
              </StyledTitleModal>
            </View>
            <StyledButtonModal
              buttonColor={Colors.primaryButtonColor}
              mode="elevated"
              onPress={() =>
                props.validarCodigo(codigo, props.email, props.login)
              }
            >
              <StyledTitleModal variant="labelLarge">Validar</StyledTitleModal>
            </StyledButtonModal>
          </StyledTopContainerModal>
        </StyledModalContainer>
      </Modal>
    </Portal>
  );
}
