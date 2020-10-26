
radDescYou.onchange=function() {
lblRadioResp.value = `I would agree that you are a ${$("input[name=radDescYou]:checked").prop("value")} too!`
}

btnFavExercPage.onclick=function() {
ChangeForm(favExercises)
}
