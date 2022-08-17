const express = require('express');

const router = new express.Router();

const {contacts: ctrl} = require('../../controllers');

const {validation, ctrlWrapper, checkAuth} = require('../../middlewares');

const {joiSchema, favoriteJoiSchema} = require('../../models/contact');

router.get('/', checkAuth, ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.getById));

router.post('/', checkAuth, validation(joiSchema), ctrlWrapper(ctrl.post));

router.delete('/:contactId', ctrlWrapper(ctrl.deleted));

router.put('/:contactId', validation(joiSchema), ctrlWrapper(ctrl.update));

router.patch(
    '/:contactId/favorite',
    validation(favoriteJoiSchema),
    ctrlWrapper(ctrl.updateFavorite),
);

module.exports = router;
