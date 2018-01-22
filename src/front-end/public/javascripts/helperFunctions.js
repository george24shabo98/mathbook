"use strict"
function handleError(err) {
  console.error("something errored out", err)
  const status = err.status
  switch (status) {
    case 404:
      redirectTo404()
      break
    case 401:
      redirectToLogin()
      break
    case 500:
      redirectTo500()
    default:
      break
  }
}

function redirectTo404() {
  window.location.href = "/404"
}

function redirectTo500() {
  window.location.href = "/error/500"
}

function redirectToLogin() {
  window.location.href = "/login"
}

function renderMath(id) {
  try {
    renderMathInElement(document.getElementById(id))
  } catch (err) {}
}

function renderCharts(chartList) {
  const renderedCharts = {}
  for (var i in chartList) {
    const chart = chartList[i]
    const selector = document.getElementById(chart.id)
    renderedCharts[chart.id] = createLineChart(selector, chart.data, chart.options)
  }
  return renderedCharts
}

function updateLineChart(chart, data, options) {
  const chartData = data || undefined
  const chartOptions = options || undefined
  if (chartData && chartOptions) {
    if (chartOptions["axisX"]) {
      chartOptions["axisX"]["type"] = Chartist.AutoScaleAxis
    }
    return chart.update(data, options)
  }
  return chart.update()
}

function createLineChart(selector, chartData, chartOptions) {
  if (chartOptions["axisX"]) {
    chartOptions["axisX"]["type"] = Chartist.AutoScaleAxis
  }
  return new Chartist.Line(selector, chartData, chartOptions)
}

function uniqueId() {
  return Math.random()
    .toString(36)
    .substr(2, 10)
}

function openNavMenu() {
  const navbarBurger = $(".navbar-burger")
  const navbarMenu = $(".navbar-menu")
  if (navbarBurger.hasClass("is-active")) {
    // return to initial state
    navbarBurger.removeClass("is-active")
    navbarMenu.removeClass("is-active")
    return
  }
  navbarBurger.addClass("is-active")
  navbarMenu.addClass("is-active")
}

function toggleDropdownMenu() {
  const navbarDropdown = $("#navbarDropdown")
  if (navbarDropdown.hasClass("is-active")) {
    // return to initial state
    navbarDropdown.removeClass("is-active")
    return
  }
  navbarDropdown.addClass("is-active")
}
