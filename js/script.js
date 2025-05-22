// Copyright (c) 2020 Adrina. peighambarzadeh All rights reserved
//
// Created by: Adrina. peighambarzadeh
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input
  const Radius = params.get("Radius")
  console.log(Radius)

  // process
   const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
  const dimensions = `<ul><li>Radius = ("radius") mm</li></ul>`

  // output
  document.getElementById("dimensions").innerHTML = dimensions
  document.getElementById("volume").innerHTML = "Volume is: " + volume.toFixed(2) + " mm³"
}
