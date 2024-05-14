<template>
  <div>
    <div
      id="g_id_onload"
      data-client_id="504682739463-ma73bgc42gcc1easgu21pde4unbfb851.apps.googleusercontent.com"
      data-context="signin"
      data-ux_mode="popup"
      data-callback="login"
      data-nonce=""
      data-itp_support="true"
    ></div>

    <div
      class="g_id_signin"
      data-type="standard"
      data-shape="rectangular"
      data-theme="outline"
      data-text="signin_with"
      data-size="large"
      data-logo_alignment="left"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted} from "vue";

function jwt_decode(token: any) {
  try {
    const payload = JSON.parse(window.atob(token.split(".")[1]));
    return payload;
  } catch (error) {
    console.warn("Error al decodificar el token");
    return null;
  }
}
onMounted(() => {
  async function login(response: any) {
    try {
      const responsePayload = await jwt_decode(response.credential);

      const {sub, name, given_name, family_name, picture, email} =
        responsePayload;

      await verificarEmail({
        sub,
        name,
        given_name,
        family_name,
        picture,
        email,
      });
    } catch (error) {
      console.log(error);
    }
  }
});

async function verificarEmail(data: any) {
  //AQUI HACES UN FETCH PARA VERIFICAR EL EMAIL

  try {
    const correoVerificado = await fetch(
      `https://cockpit.goddito.com/api/content/item/restaurante?filter={correoAsociado:'${data.email}'}`,
      {
        cache: "no-cache",
      }
    );

    const dataUserFetch = await correoVerificado.json();

    //console.log(dataUser);

    if (dataUserFetch?.correoAsociado != undefined) {
      const dataUserSaved = {
        email: dataUserFetch?.correoAsociado,
        picture: data.picuseUserStoreture,
      };

      localStorage.clear();
      localStorage.setItem("dataUser", JSON.stringify(dataUserSaved));

      await useUser.fetchDataUser();

      router.push({name: "perfil"});
    } else {
      useNotificaciones.showNotificationApp(
        "El correo no esta en la base de datos de Goddito"
      );
    }
  } catch (error) {
    console.log(error);
  }
}
</script>

<style></style>
