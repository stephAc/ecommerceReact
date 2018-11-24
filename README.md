# Etape 1 : Configurez Git

## Renseignez votre nom d'utilisateur
```
git config --global user.name "NOM_D_UTILISATEUR"
```

### V&eacute;rifiez votre nom d'utilisateur
```
git config --global user.name
```

## Renseignez votre adresse e-mail d'utilisateur
```
git config --global user.email "prenom.nom@u-psud.fr"
```

### V&eacute;rifiez votre adresse e-mail d'utilisateur
```
git config --global user.email
```

# Etape 2 : R&eacute;cup&eacute;rez le dossier du projet Mercury
```
git clone https://git.iut-orsay.fr/kevin.dauriach/mercury.git
```

# Etape 3 : G&eacute;rez votre branche

## Cr&eacute;ez une branche
```
git checkout -b NOM_DE_LA_BRANCHE
```

## D&eacute;placez-vous dans une branche
```
git checkout NOM_DE_LA_BRANCHE
```

# Etape 4 : Envoyez vos modifications sur une branche
```
git add .
git commit -m "COMMENTAIRE"
git push -u origin NOM_DE_LA_BRANCHE
```
