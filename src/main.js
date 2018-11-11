/* Optional Modules */
import './modules/optional/arrange.js'
import './modules/optional/class.js'
import './modules/optional/css.js'
import './modules/optional/data.js'
import './modules/optional/memory.js'
import './modules/optional/sugar.js'
import './modules/optional/transform.js'

import Morphable, {
  NonMorphable,
  ObjectBag,
  TransformBag,
  makeMorphable,
  registerMorphableType
} from './types/Morphable.js'
import { extend } from './utils/adopter.js'
import { getMethodsFor } from './utils/methods.js'
import Box from './types/Box.js'
import Circle from './elements/Circle.js'
import Color from './types/Color.js'
import Container from './elements/Container.js'
import Defs from './elements/Defs.js'
import Doc from './elements/Doc.js'
import Dom from './elements/Dom.js'
import Element from './elements/Element.js'
import Ellipse from './elements/Ellipse.js'
import EventTarget from './types/EventTarget.js'
import Gradient from './elements/Gradient.js'
import Image from './elements/Image.js'
import Line from './elements/Line.js'
import Marker from './elements/Marker.js'
import Matrix from './types/Matrix.js'
import Path from './elements/Path.js'
import PathArray from './types/PathArray.js'
import Pattern from './elements/Pattern.js'
import PointArray from './types/PointArray.js'
import Polygon from './elements/Polygon.js'
import Polyline from './elements/Polyline.js'
import Rect from './elements/Rect.js'
import SVGArray from './types/SVGArray.js'
import SVGNumber from './types/SVGNumber.js'
import Shape from './elements/Shape.js'
import Text from './elements/Text.js'
import Tspan from './elements/Tspan.js'
import * as defaults from './modules/core/defaults.js'

export {
  Morphable,
  registerMorphableType,
  makeMorphable,
  TransformBag,
  ObjectBag,
  NonMorphable
}

export { defaults }
export * from './utils/utils.js'
export * from './modules/core/namespaces.js'
export { default as parser } from './modules/core/parser.js'
export { default as find } from './modules/core/selector.js'
export * from './modules/core/event.js'
export * from './utils/adopter.js'
export { registerWindow } from './utils/window.js'

/* Animation Modules */
export { default as Animator } from './animation/Animator.js'
export { Controller, Ease, PID, Spring, easing } from './animation/Controller.js'
export { default as Queue } from './animation/Queue.js'
export { default as Runner } from './animation/Runner.js'
export { default as Timeline } from './animation/Timeline.js'

/* Types */
export { default as SVGArray } from './types/SVGArray.js'
export { default as Box } from './types/Box.js'
export { default as Color } from './types/Color.js'
export { default as EventTarget } from './types/EventTarget.js'
export { default as Matrix } from './types/Matrix.js'
export { default as SVGNumber } from './types/SVGNumber.js'
export { default as PathArray } from './types/PathArray.js'
export { default as Point } from './types/Point.js'
export { default as PointArray } from './types/PointArray.js'

/* Elements */
export { default as Bare } from './elements/Bare.js'
export { default as Circle } from './elements/Circle.js'
export { default as ClipPath } from './elements/ClipPath.js'
export { default as Container } from './elements/Container.js'
export { default as Defs } from './elements/Defs.js'
export { default as Doc } from './elements/Doc.js'
export { default as Dom } from './elements/Dom.js'
export { default as Element } from './elements/Element.js'
export { default as Ellipse } from './elements/Ellipse.js'
export { default as Gradient } from './elements/Gradient.js'
export { default as G } from './elements/G.js'
export { default as HtmlNode } from './elements/HtmlNode.js'
export { default as A } from './elements/A.js'
export { default as Image } from './elements/Image.js'
export { default as Line } from './elements/Line.js'
export { default as Marker } from './elements/Marker.js'
export { default as Mask } from './elements/Mask.js'
export { default as Path } from './elements/Path.js'
export { default as Pattern } from './elements/Pattern.js'
export { default as Polygon } from './elements/Polygon.js'
export { default as Polyline } from './elements/Polyline.js'
export { default as Rect } from './elements/Rect.js'
export { default as Shape } from './elements/Shape.js'
export { default as Stop } from './elements/Stop.js'
export { default as Style } from './elements/Style.js'
export { default as Symbol } from './elements/Symbol.js'
export { default as Text } from './elements/Text.js'
export { default as TextPath } from './elements/TextPath.js'
export { default as Tspan } from './elements/Tspan.js'
export { default as Use } from './elements/Use.js'

extend([
  Doc,
  Symbol,
  Image,
  Pattern,
  Marker
], getMethodsFor('viewbox'))

extend([
  Line,
  Polyline,
  Polygon,
  Path
], getMethodsFor('marker'))

extend(Text, getMethodsFor('Text'))
extend(Path, getMethodsFor('Path'))

extend(Defs, getMethodsFor('Defs'))

extend([
  Text,
  Tspan
], getMethodsFor('Tspan'))

extend([
  Rect,
  Ellipse,
  Circle,
  Gradient
], getMethodsFor('radius'))

extend(EventTarget, getMethodsFor('EventTarget'))
extend(Dom, getMethodsFor('Dom'))
extend(Element, getMethodsFor('Element'))
extend(Shape, getMethodsFor('Shape'))
// extend(Element, getConstructor('Memory'))
extend(Container, getMethodsFor('Container'))

registerMorphableType([
  SVGNumber,
  Color,
  Box,
  Matrix,
  SVGArray,
  PointArray,
  PathArray
])

makeMorphable()