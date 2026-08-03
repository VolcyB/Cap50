# Cap 50 — le site du voyage

Site statique (HTML/CSS/JS, sans backend) pour le voyage entre amies au Maroc.

## Structure

```
site/
  index.html        Accueil : photo pleine page, logo, texte, menu
  programme.html     Programme détaillé jour par jour + carte
  galerie.html        Galerie photo avec zoom (lightbox)
  a-emporter.html     Check-list "que prendre avec soi"
  meteo.html          Météo au Maroc en novembre
  playlist.html       Playlist collaborative
  photos.html         Album photo collaboratif
  assets/
    css/style.css     Feuille de style (palette désert marocain)
    js/main.js        Menu mobile + zoom galerie
    img/              Logo, photo d'accueil, photos du programme et de la galerie
```

## Héberger le site

Ce dossier `site/` peut être déposé tel quel sur n'importe quel hébergement de fichiers statiques. Deux options simples et gratuites :

**Netlify (le plus rapide)**
1. Aller sur [app.netlify.com/drop](https://app.netlify.com/drop)
2. Glisser-déposer le dossier `site/` entier dans la page
3. Un lien public est généré immédiatement (ex. `cap50.netlify.app`) — modifiable dans les réglages du site

**GitHub Pages**
1. Créer un dépôt GitHub, y déposer le contenu du dossier `site/` (à la racine du dépôt)
2. Dans les réglages du dépôt → Pages → choisir la branche `main` et le dossier `/root`
3. Le site est publié sur `https://<votre-compte>.github.io/<nom-du-depot>/`

Dans les deux cas, il n'y a rien à configurer côté serveur : ce sont de simples fichiers.

## Activer la playlist et l'album photo collaboratifs

Un site de fichiers statiques ne peut pas stocker lui-même les contributions de plusieurs personnes (pas de base de données). Les pages `playlist.html` et `photos.html` sont donc prêtes à pointer vers un service externe :

**Playlist (`playlist.html`)**
1. Créer une playlist sur Spotify, activer l'option **Collaborative** (⋯ → Collaborative playlist), copier son lien de partage
2. Ouvrir `playlist.html`, remplacer le `href="#"` du bouton `id="spotify-link"` par ce lien
3. (Optionnel) Faire de même avec un Google Form pour le bouton `id="form-link"`, pour celles qui n'ont pas Spotify

**Album photo (`photos.html`)**
1. Créer un album partagé (Google Photos ou iCloud Photos), autoriser l'ajout de photos par les invités, copier le lien de partage
2. Ouvrir `photos.html`, remplacer le `href="#"` du bouton `id="album-link"` par ce lien

Chaque fichier contient un commentaire HTML à l'endroit exact où coller le lien.

## Aperçu en local

Pour prévisualiser le site sur son propre ordinateur avant de le mettre en ligne, un petit script PowerShell est fourni (`_serve.ps1`) : il lance un serveur local sur `http://localhost:8734`. Les fichiers `_serve.ps1` et `_preview.html` sont des outils de développement — à supprimer avant la mise en ligne définitive si besoin (ils n'ont aucun impact s'ils restent).
