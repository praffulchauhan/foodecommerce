import React from "react";
import "./Cart.css"
import { useState } from "react";
import NavLogo from "../HomePage/NavLogo/NavLogo";

const Cart = () => {
  const cartItem = [
    {
      id:1,
      name:"mix-special",
      price:1900,
      quantity: 3,
      image : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8AvgMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAQIHAP/EAD8QAAEDAwMCAwYEBQIDCQAAAAECAwQABRESITEGQRNRYRQiMnGBkSOhwfAVQrHR4QdSM2JyFiQlJkNTgsLx/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMABAUBBv/EACwRAAICAQQCAgADCQAAAAAAAAECAAMRBBIhMRNBIlEyYdEFIzNxgaGx4fH/2gAMAwEAAhEDEQA/AOk3yd/DrXJmYBLSMjPGfWuIf6iT3Jd3ZcdebeQUfhOpQEkd9JA27/0zXeLhEbmQ34z6dTTyChQ9CK47M/08n/xVLbzrbkRteUqB95Q8iO1JtLBwR1NLTLp20zq/4/UAdOXRyO8zIYWA80cq35rstvuqVxxeoafFZWnElpHxahyR9PzHrXFOsrA/0vdG32gtUR/4DnhQG6SaPf6ddTG3zkMSV5gyjgpJJCCfP996NTj+syXXaYw9U9UyYPUS3VqTIgyUpdhO6iAWykZCSMd8+u9MFn6zduUVaIySXGyMLXucEcHzxvv5YodJs0Zq6qst0bQ7bJSy/b1r38NXK0Z7b7j5+tXkm2WdsNW2CnwUEhxxAwVHvjz+ZqhqXaoEhsT0Wmuq1NKo1WWHv9ZaMz25bbd2jNuICspdSN0nzx+tFJ1tVJZCEOqSnsUHihAudvfRn2lIP+xadJH3q5AvraAltLqXQPrt8/Oq9GqH4bTmK1GkLc1rgj1C1uh+wxQ0gqPdRUcknzoBbLBMjXydMcdQGHdm0JOpXJO5IGPlTK3cYig24leUr42/KqtzvLMINqLeou5ISDjAGNz960XepVDE8CZS0WO+wDmYtlmgwJL0uPHSmS//AMRzJyrfNGUcVVgvolx0PNggKHB7GrQ2FWUKlcrAZSpIPcyN6zWE1tRQZ7avEV7isFVSSYJwDSjdL65cW5cSDoSpCiEKX8LmDuOfzppcVkECkOZ07Dfuz8lC1NLT8HbbOcjfz/L51W1LOANk4wJHEaekPH/gMVclOl11OtSfLNXFXVhM9UMKHiIAK9+M8bVz1vrKba7i9FuUqIy2kfg+OtSdQG2d9vLg172aT1PITc4jqIkhB8F7w1a0OJwCFA/I0K2syAKOYIPqdRC0rTqSQQeCK0UaWIHUcVl1q3BxcpxoEPPjGkYzn7UwsSGZDKXmVhbSuFjin12q3GeYQIm9eAzueaF/xuOuSGWyNyQnVtqwew5/Sihx2OaJXVup0GLlz6ljRJjsRAbLrWAsLc07kA4Gx9PvViHKZusFqVHzoWPhPKT3B+tKHXPS8mdO/iFsc8N9YAdbVwrGwP78qYukYL1vszEZ45cBJUfUnJqunl8pDdTTvTSjTK9Z+XuJn+oUxu5WqZEaWyUIOMFvUVFJ5BztuD+dcfbW5CIK0KLLgzgd/lXUup+j7w3KeTDdaXEddKkrUspKATnfb1qzH6MiJis2ichLiXWVLQ5n3tacZx98/el1s4J8kPXrpSqCk8+5X6Q6qYu9uRYb7odSoARH1K05I4ST2POD3xRlU5VphuonR3HozLhbakK/9VXICvI74zxkVze+dB3K1SNLb6VwlE/iqyNP/UAD9wPtV20TeoI6kQEf+IQnAG1tuL8Rsp7nJOR/WpfWlg+XczK7LKT8Didd6dnRpkZlpTbSw+M/BgEdhQiXLahyn4qwEspWQ24ngDyPyqFFsfs9sa9kkGOC+Vts6skJPI339asQ7SJelClZQVDUQv3h61lanO5alHM3P2dXsQ22NwZDFQ/NuLXsMgqZKvxAkjHzrfwXPHeTLcK1hwjKvLO1TtINgu5YXITJUEawlRDYbB2BUr1x2FHGbfGuDiZq1rbOR4jSFhSScbb/AC8sUS6RrE8fsGPt1C1P5cfEjuEbC0pm3tpV3yofImiClYFYa0aQEDAA2FZUjI5rerTYoX6nnLH3uW+5uncA1nJFQsqIJSamBo4E9nINaK4rJHcVTuapKIL5hhJkaCW9RwCrG2fKuE4GZIK6xuxtNnW+j4ioIz5Z5NKVj6kRcHnB7ydKVOKcKyvYd9/XbA86Y4sabd7StnqOK0hSj/wUq1YAxgk+e2c1Az0fblMojoYOA4l0FKiDqTwSRvVK2trHDA8fU0qdTSmlasp8j7lCRameolOKlNNewg/huf8AubAZ9N89/wDDDYrPGttsMa2ALbQTkJXqOef36UP6zZnRLUWo0cSIxAQpptGFD5HgD6GitnAsdkbbfWNSG9TpPY4/QYp1aYYgiZW75Yi3arU6lUmXPiqaQpzPgEKGEn4sD953ot1BPTbbUh1lJ9maG6EI1JUDxnfjNGo05clkrYcacychsn+XO/1FYUuJLS8hxDZSglDgHbtxQrUgUge4fjI7ETenrg05mVGYQ0G8ITGJAIzvkem5z/Wmfp+e5MXKKwsthWy1pxvxgefn9anesMSQtp0JGWwQhSAMgEYI+WKvxorTDCGo6QEIGAPKuVUsh5M4olZbGo8flVG/tSBY5iYZUHiyQjQcH6H5UbCaikoC2lJIyCN/WrRHEI9RBdvcW9NM22ahwPFk7OpwFLHBzwfv3pekS2Wm4S2HylcZ1xxTzyFKWlZwcNpyMjtnYbVcvvTjUGc0tufIWEFSmoxXs2k8nbGOO/OKT+obhbrrd0eFJlotgZAUjABUobbf586zHJ8hBkppe2wVr2YaudwkdWNlmJFmyGWwAspUEpQrA91WnGT33zjNWem+hJ2HPaWWGm1KGPF/EUkA9t8Zqj07eLZaXQmzpnh1wgBtZQ4l09gRgHz3B712phsFA93G3HlTaVVyTky5rNA+kxvOcxNnwHxLWt3WU4CUHkhIHH786qLeLkpDIX4DSfjWd1H5AV0QxU7FYGTxSVLsk2OpSfBLqcn30Hn/ADVHV6U1negJzNLRa1bBssOMCBep7fKut1M+yvIf1IShxtR0lBGwO/b/ADTj0lbXLXa0sSFhbqlFbhHAPkKpWGzvsSTIeSUAjSEq3zTQ23p9BV7R15/euuGMra/VEqKEbKiZCShWomtlL2rzh2GKiJzV+ZM219/Kpmtxq/Kq5BKTjyoZZ5V2NwWxKaa9kbQT4oBypWdh5DagZ9pAxJD52SScADmqzq9RwAAB37ioZkxLekEKcWd0NI+JX+PWgkuRdZscrYAjoU4EJSMhRHdRPJx/8eDXGYLyYQUmF33GWE5dcbTjfClAYrdm4w3WA4yQc74B3oDJtTL7sfxVKQQ2VBQWnSvOxznk785olAhtx46I7DQLaj748TWBtsrJ+X0pS3jPAnTWT3N3rilBAdVq8QkNpIydv0rV2OiRFLb+MLSQtJPII3ode4jyUCRCY8VwK0aFJxgeYP0P5UGtfUy25iYt5hrZCyEtvatSSTwM9vrXRqk3bWOJw0MBkczWzWB2JMkJF7U2wh0pTHcQCTwRhWoHvj/NNjFuUxKkSYkgK9oJVp4wcb/nQfqCzG5s+02yStpwAbpwR8iDSxHul6tt2bt6kFXwBlSF7PKPKfexj1OaW48ZyBxHLZuGGM6G2y6xgEqSs7nG9WAVDIB/KqltfmymVe3xFsOD4SojbHbNWkAjIIP9T/SrAfcsSU2nEuLWhtJU4oJSBkk1CX2FoBS4laVDIKTnNDL86U+CUg5CieTjaq8e5Nr0tuhKSTtuP0pmZ0LkQX1p027f0tewyywdQDw48RGePPI3xQw/6f2ZOoCEWytotpcD61FHyB2z3z6U0utSXDqiztuyVp/Uf2ql490EhLciMC0TguNq1YpJRc5xyYwJjkdyn0L0mzZYYC325UpSyRILQSop7AbnH+aP3pyUiCr2HHjp3CT/ADelLsKJc7bKcEeSpcRTilhBzlOce7vwOeP8UzMpUpseInehr3HKkYimLN+Iyn05eJ1wQj2uG5HCc6vFGk52Gw+9Xj1FBK0DxEAFejB59K28LHwDHyoPH6YjJuqpytWpStRRn3c/Koy2KAEgkRsXjTtj7VWTnJzxW5UdOM1X1KSSjH1qxJJVK7Z2rAOTVZ3I3ArRl8g6VZ+ZFSSEEgY3qncJbcVBOUBRB0542G5PoKmW7pb1Z2pQvdw0Bt9ZSPaFgAOED8PfAwfTc/P0FA7bVLfUJRk4lpEaUueuQ+9qbW3lICsKVjcq8h229K0N5ccmtoPguxi7pWtp3/hAJ1ZVsQdud6TeqL0JjOGHlnRjxnGDoS6jY+8DvkY2xkYPfmqVklmU4+/GkJMUManleHnI3TjGScDA253zWazZBbMdkdCN98aMSQqYzMLDbQJIiskJKSMg7gg5yTt6VVsXUEmJAeVIU9MOvwmw4koCFhJPOOOe/FG+k7/Fn2hqVJaLOlWg6kYSrSMakk89hU10mwUNhMaW2ghOwz7pPGdhnPHfgUpiOWDciWK1Z8Lt7mLVeUSW0GVHWw2tOtDz2SN/nxzjff8ApVBSrM9EEMtrnyChaWoyyQAlKsYUvjA23yTg0DkTEXFM3WlhzCgpxC0EpVtgntvjuPSgTjkGzX5IthU2lKUjxFAaXMknb58HjtSWfeORyJcGis8mwdGMXTg6iskzVNV4jC1nWhTgKEAnhCjuQOMGmO5WqPeGm7hDOJTDwW0s76SDkjHy2oA3dBOUtct5sRx7oYTkYTt7xzyrn5YFEuh5a47soLKlRnHCptRB3SOPyxTtHqnss8VnUXrNAKqiwGCIasDl0kqCZjQZShStIzkkds49PPNHpTehKFAehqFqelRwhlaE9lFPNRuXyOydK9ZPpitgJtGJjmwk8wdeFEvtpSCSEnYd/wB4oHLieKToSG3xvnA94emKOzFZng4JwkcUBuF2j6HS2lbgbJStTacpSQd9+dvOhdlXuXKKns4UTX+ICOEodcJfSM5AwHBnt/Qjnap3uoVRoqpEvShlBA8U9/QDn9K5r/2vUwH1BlqRIfWR+I3rO+wA/LGKY7HLlzuoL1HaC3v4fBbitJQPiVk6yB5qKRv6Cqg1DkE4lvW6VNPtGckx1jzZU9pMiE3F8NQ91Zy5n7FOPlvVFzrJFquTMDqKKIRkKwxKQvWy58+6frt60s9My7103IU3c4TrUJ10pDuQpAB+HdJODk43xtipetWrZ1SY1ulzwy406pZW2U5b91XIJ44qtXqnWwK55Mym4nTBJZLWpKk5I23oMzdXkzPBUgBBOM8nNLHSonR7X/DZEkSJER72cOtHKVIHwq38gCPtTixDbz4n8/c+daP8UAicwCMwughaRgb1EljQ645q1FYSMY4xXm8hNSoXq2p05NNGRuKreEw8CW3M7lOQdsjYj71eI2qsoBHwjAPaumSULi74UfRqAKlJbKj2BOD+WT9K5vcZLvUUp6ZAaQ97MdDLHGpOoZVnuP8Al8hv5U79TEqhBKMgqUrG3fQquIs9SXOyrVA1rKceGtpQ2UM9s/fIxVfUhmQBYS95MYLvZBAivu3GUpuQ4VBLEYjQDwFHbb5D/FbRunItoSbVOAcdUokT4ydDqUEZUhaM/D7uc5POMZxn0a6omdPNXa9t6whwoUgYKnNPBPGM9+fpWbl1Cm8XNn+DIQm4uIStkN8cb6887eX6Csms3ch/9S8yU7lCS+OoJEuDGj2yEEQlJUkyXE6tGg4PJ8wcDvmrERFvuPTz0i0fiyHcoekONkeGkbKUkKJJPkAf6UEvDd9YYZWssQWEOpK0tNeGCc99z37etTxblMakNRQqO2w2StpxIBQkE6cYG/1znPNAVXb8Iepc6cjnJ9SSJAuNnmsyhGPsTpUj8JQcS5kYSdvhJVtvihnU1pTMS7PbU62ArxCOzSBycAbjzPIz5U79KzW+ornPtheSiIlsB4OtALKiCCEg+mN8f3qfqGxR+mLVJXaFPSZD7QYMeS9qSpskJJzjKTv9adXuX5Yh16ryVFbM7vWJzd5q4W+1Q5rLocQ6kIVk50qps6LmS129yf4iURoz/hpSrl7ss78b1rZLW1OtuL1JfdajSfGfdaaAacVg5SFnkD0x9+NrPYXrt0+41Zw5EtrM5amW3iVPON53z5YXnnJwB3pYPZ9gy5ZrGcJWxwvuPF2uukeztNqcc4KEn94qCzwZD/iOzW0Ak4ShO+B8zRqLCaSouHSV59751N4qEHAI89q9AMnmeZIGYv35bxdcbjkguEJGDjA7muN3tE603WQ20XS2tZKVAbnNdokJCnX3Ur1KUopx5UKk2Bp9Otwp188cGkW1h+5q6XVWafOw4nJLXaHvFYmPtLPgOJcKQPIgj+ldjt0WBBDpjLb1TXjJUsq3c1cfQDH1zQhdsSyrQrGjscUudRWuNIZQm4aylolTUhkDxGjngg7KT6ZB8vVT1EjmKs+Xy9zobz0ZlQYmLYSpwEBtawPEB5Fc+v1o8OW54KEux4pUkkOFa88pChk7YwcgcZ270vXgouE4eySWI7HuobUHlDbc6l5Axv8ALG3NXDAQ4489c5zwddUC6UrIDmBvkHcDG2fXHeqe0DGZStJY4nQegoLzMJx+SDrfeJGFZGkbAjcjfJ4p5ZQNPFK/RlrNstQStR1PEOaNZUEAgbf1pnaURtWlQMVgYkXqT6a8hBBzWAupAqmzs2HFQP7IUfSpiagfUC2vBBxscdj5VDJAV1AKBxlKsgkZ80//AGriC1KLzjjrYLpKkuLyNlZ3H6eldznNB5CkE7KBSceRwK5rfenm1SGJymwAXdbyUjbWlXvAehOT8jVTUPsr3/UfRT5nCD3LELpdp+1oenMt6XE6dCSUYzsCsjlW+M9qrxelI7s9uQyZMJ+AhPs+N8KBOcn+YdseRolKvkNbjMOIs6NlOAJIwB2+ZqO53lTamyylXtDmUlfZoK+HV2/Yrz4tt3/zm8dHWK+v1laW5e3Hf/MngyYbDiVaI7JQAc7FQ5O2/OBitbs/ZrdCVPS+3LWylWplS8a/IEgbb4GMbeVEoNzdfbQ3cohceGAVp2B93uPPc0LtPRVtQzKfu73hZdWpKXnfcbbz7oAPmN/rinK4Zsv/ANmbfpTjJOc/2jKiy2piI1K1R2JK1pW6tI0ualYBwoHOPnnjNQX+2z75oUidkIZ95vfQDwQV+exGSANj50oP3KZaOoERIqfa3YzhYjhwBRS2UEgEnblSSe+E+lM0G9sxE25hLwU02+63KLa/dAUDlWQnG5weRyMVawox+cUjGsjHqV7Y6GojFljXJSm0AuNyXGQEoBVgbD4t878bUVst1aslkcgR/EkXGM+ttDa/dLxUrVqOMjT73Pp9KqPIgTZctqEVtpfeK23ydklSAk5ycAEYGMc02RLYIrftElCBIKUto0jA4xkDsMDPpg0yurynaIVt4K7sYl60xn3IDMiepJkujWsNghO/l/ervszQwQARip4wCUBKfhAwMeVWNCcbj7VsDjiZnfMUS4Ct1SkpIK/PGd6i1cpUrSc7ZJ3qZDS3GwsJzjcHFVSHC5hYSsDfbbFDLYkbjZIOsb80v3aN4qSpJBCTv6UxSWtKCo44zg96HCG9MwXQUMk422JzQNGLxANktcdcn3kguA5T5Hbj9aaolvS5LitqbC0I9/30g4xx+f8ASgUy1yYjhLS9DY3SBykimXpgqfy66fxAkatuCaBBzgyWYxmHWmyDmraRtUbdWEYIqxKc0FbBWKw4NO9YIrkk1myFMRVuAEgDchJOkeeBuR8t6WJFxebUp9h1CHEBJKnFZbWk/CHCOUn+V0ccHuC05xSnfIKoajKhocVH1KU400MraKviU2ngpP8AM2djyN6hkhGFPauTS9KVtvt+68w58bSvI+fbcbGhdwYZSp1uSotxnt1ODbw1gABf6H0x5UAhuuNz2VxnQFNgFKmiVJKP9ozuUeWd0nanGS0X2Eh1IQsp1FI37b0hgCCD1HISpBE5tf8ApqdEnsJluFaSv3XUHTv8hWkqE5bWUuQ3kFLqtLniJCyM8nP22pwdkIYaMC6pL0JRJbWndbHy8xz6jHcbUAk2572d9uMRKaWCGlo99BI4B8iDyDxvWNqqWRgU5X6m7pdULKyLD8v8yMX21Tn/AAEw5EeW2kJ/AWML8icjYn51tfI3tFokXSA7KfkJcbHgJHu7Y2SOQd+x5FLExu8xG0rEbLmdGsN7jG/bypigN2uAIVyhS1pnwfxZDTrx0PpIOo4OwVgnB+lDtCOCZSvesriscxv6f6ctdwtTU2dDSXJKEufibqb7jc9wTzUNzE6NFQ4xHivhKC0SE5A5SPcA9R2PHakfqS+XqYXkWKe42285q8GOQrA/Mjz+tM/RCJUO1hfUT62GQNLSFghayN8IHJPyqyiF1XYJT3FTzK3T3T91lSG3XPDbbAy6pYUlCMHOyc9t966JHUZsnWR+CgfhE/zDur69vT50uTeoY0v8NTzbEbVnwFLBcdwdte/H/L9/KtnOrmAgJZQtxaT8SEEg/lWjRVXpx3yYu+97sKBwI6hsBOxIqJ6eY2EutrUDwUDIpEPU908T/u8N5wH+ZeEj6UTiXe7vo1KYS2e4J5+1O8qfcRsaSNB5O2SBjIB7ipgkK2UkA1LHWhcZDmCARmhkic+4stxmcAj3V6saiPMdqIyzL6oefecO3Og96ytIUBgDT8uKGpZvbmn/ALwyyMHVn39/SthCf1BXtbjzw/3HSlP0G33ocyY/OW0JbfaV7oJSSCM54q5aoyUtrWhKQFqzt5cUMZDgU7snWCVAjg0etCFNwUIcABBON87Z2qCDZ1JQjBqZA2rYp3rKRRRMwpGob1oGyOasAViuySAtg81E7ESvYZFWjXjXJImzrA5EnJmQEIUUq1mOs6UqP+4HGx+lWheW3W0uXKH7I81lOtCvETgnHOMjsc4xxTBLRqaKgMlO/wBKDyg2lBcVjSBknHp/Y0plxzDDfcC3rp2JdblAuSlZcjatBTuFA/22I+lDZljdbmIlQpL8Z1GT+EvAX/1diOOf1q2qUqBGRcrafEt7oCnGVbYB7pHbvt86YIq2LhFQ+1nQrzGCD6/elFM8iGDFZ243Vkfi2+DMWOC4nwyfmU/2qi21GVJVI/7Ox/EV5yVKT6e7j9f705uQ874GN8/fH7/ZoQ81K/jcVhpCBFU2suqPfGNh3yPt86WwI7hZEpJVPXgR2o0PPeMwMn6q1flUiLMX3fElKLzpGCp1ZUrHl329KY0RR7vBC+PX+/1+1WPBDWylDbYZz+lHhj2ZzIHqBGLM0nZLaPkB/wDlXkWpI7J274oo0Ar3UnOfU/rU6EDkcJ59P36UQrWCXMHM21tPz+VXERkpGNvtVgBI49P8fv8ApW2cAYpgUCAWJn//2Q=="
    }
    
  ]
  
  const [cartItems,setCartItems] = useState(cartItem)
   const handleCartClearButton = () => {
     setCartItems([])
   }
    const handleAddProduct = (product) => {
        const ProductExist = cartItems.find((item)=>item.id===product.id)
        if(ProductExist){
          setCartItems(cartItems.map((item)=>item.id === product.id?
          {...ProductExist,quantity:ProductExist.quantity+1}:item))
        }
        else{
          setCartItems([...cartItems,{...product,quantity:1}])
        }
      }
      const handleRemoveProduct = (product) => {
        const ProductExist = cartItems.find((item)=>item.id===product.id)
        console.log(ProductExist)
        if(ProductExist.quantity===1){
          setCartItems(cartItems.filter((item)=>item.id!==product.id))
        }
        else{
          setCartItems(cartItems.map((item)=>item.id===product.id?{...ProductExist,quantity:ProductExist.quantity-1}:item))
        }
      }
  const totalprice = cartItems.reduce((price,item)=>price+item.quantity*item.price,0)
  return (  
    <div>
      <NavLogo/>
   <div className="cart-items">
     <h3 className="cart-items-header">cart Items</h3>
     <div className="cart-items-clear">
       {cartItems.length>0 && (
         <button className="clear-cart-button" onClick={handleCartClearButton}>Clear Cart</button>
         )}
     </div>
       {cartItems.length===0 &&(<div className="cart-items-empty">No item Added</div>)}
       <div>
         {cartItems.map((item)=>(
           <div key={item.id} className="cart-items-list">
           <img  className="cart-items-image" src={item.image} alt={item.name}></img> 
           <div className="cart-items-name">{item.name}</div>
           <div className="cart-items-function">
             <button className="cart-items-add" onClick={()=>handleAddProduct(item)}>+</button>
             <button className="cart-items-remove" onClick={()=>handleRemoveProduct(item)}>-</button>
           </div>
           <div className="cart-items-price">
               {item.quantity}*${item.price}
             </div>
           </div>
         ))}

       </div>
       <div className="cart-items-total-price-name">
         Total Price
         <div className="cart-items-total-price"> ${totalprice}</div>
       </div> 
       <div className="cart-items-buyButton">
         {cartItems.length>0 && (<a href="#" className="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Buy Now</a>
       )}
       </div>
   </div>
    </div>
  )
};

export default Cart;
