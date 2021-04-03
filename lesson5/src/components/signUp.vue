<template>
  <form class="sign-up">
    <div class="form-group">
      <label for="login">Логин:</label>
      <input id="login" class="form-control" v-model.trim="login">
    </div>
    <div class="form-group">
      <label for="login">Почта:</label>
      <input id="email" type="email" class="form-control" v-model="email">
    </div>
    <div class="form-group">
      <label for="login">Пароль:</label>
      <input id="password" type="password" class="form-control" v-model="password">
    </div>
    <div class="form-group">
      <label for="country">Страна проживания:</label>
      <select id="country" class="form-control" v-model="country">
        <option v-for='(country, index) in countrys' :key='index' :value="country.value"> {{country.name}} </option>
      </select>
    </div>
        <div class="form-group">
      <label for="themes">Любимые темы:</label>
      <select id="themes" class="form-control" v-model="selectedThemes" multiple>
        <option v-for='(theme, index) in themes' :key='index' :value="theme.value">{{theme.name}}</option>
      </select>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="notification" v-model="notification" value='1'>
      <label class="form-check-label" for="notification">Уведомлять меня о новых курсах</label>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="notification2" v-model="notification" value="2">
      <label class="form-check-label" for="notification">Уведомлять меня о новых курсах 2</label>
    </div>
    <div class="flex">
      <div class="form-check">
        <input class="form-check-input" type="radio" value="male" name="exampleRadios" id="male" checked v-model="sex">
        <label class="form-check-label" for="male">Мужчина</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" value="female" name="exampleRadios" id="female" v-model="sex">
        <label class="form-check-label" for="female">Женщина</label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Сохранить</button>
  </form>

</template>

<script>
export default {
  data() {
    return {
      login: '',
      email: '',
      password: '',
      country: 'Russia',
      selectedThemes: ['IT'],
      notification: [],
      sex: 'male',
      countrys: [
        { name: 'Россия', value: 'Russia' },
        { name: 'Украина', value: 'Ukraine' },
        { name: 'США', value: 'USA' }
      ],
      themes: [
        { name: 'Интернет технологии', value: 'IT' },
        { name: 'Языки', value: 'languages' },
        { name: 'США', value: 'math' }
      ],
      
    }
  },
  methods: {
    validationStatus: function(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.is-invalid {
  border: 1px solid red;
}
.form-control {
  width: 400px;
}
.form-check {
  margin-right: 10px;
}
button {
  margin-top: 15px;
}
</style>