import type { Schema, Attribute } from '@strapi/strapi';

export interface TextPhotoSideTextPhotoOnSide extends Schema.Component {
  collectionName: 'components_text_photo_side_text_photo_on_sides';
  info: {
    displayName: 'Text Photo on Side';
    description: '';
  };
  attributes: {
    content: Attribute.Text & Attribute.Required;
    Image: Attribute.Media<'images'> & Attribute.Required;
    ParagraphType: Attribute.Enumeration<['TextPhotoSide']> &
      Attribute.DefaultTo<'TextPhotoSide'>;
  };
}

export interface TextPhotoBelowTextPhotoBelow extends Schema.Component {
  collectionName: 'components_text_photo_below_text_photo_belows';
  info: {
    displayName: 'Text Photo Below';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    content: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    ParagraphType: Attribute.Enumeration<['TextPhotoBelow']> &
      Attribute.DefaultTo<'TextPhotoBelow'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'text-photo-side.text-photo-on-side': TextPhotoSideTextPhotoOnSide;
      'text-photo-below.text-photo-below': TextPhotoBelowTextPhotoBelow;
    }
  }
}
