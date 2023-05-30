# Calculateur IMC

Un simple calculateur d'IMC (indice de masse corporelle) qui utilisera le poids et la taille d'une personne afin de calculer son indice de masse corporelle sous forme de nombre.

## Comment le construire

Nous utiliserons quelques entrées de gamme pour permettre à nos utilisateurs de sélectionner leur `poids`et leur `taille` sur une échelle mobile.

L'indice de masse corporelle est calculé sur la base des valeurs de poids et de taille stockées. Notre objectif sera de calculer instantanément leur indice de masse corporelle, en fonction des valeurs stockées dans les variables d'état `weight` et `height`.

Pour ce faire, nous utiliserons le useMemocrochet React pour calculer de manière performante cette valeur chaque fois que l'une de ces deux valeurs change.

### React concepts que vous apprendrez

- Entrées de plage dans React
- useMemo (pour effectuer des calculs performants)