/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "x500-ts/dist/node/modules/InformationFramework/Name.ta";
import {
    AuthorityInfoAccessSyntax,
    _decode_AuthorityInfoAccessSyntax,
    _encode_AuthorityInfoAccessSyntax,
} from "x500-ts/dist/node/modules/PkiPmiExternalDataTypes/AuthorityInfoAccessSyntax.ta";

/* START_OF_SYMBOL_DEFINITION ServiceLocator */
/**
 * @summary ServiceLocator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceLocator ::= SEQUENCE {
 * issuer    Name,
 * locator   AuthorityInfoAccessSyntax }
 * ```
 *
 * @class
 */
export class ServiceLocator {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `locator`.
         * @public
         * @readonly
         */
        readonly locator: AuthorityInfoAccessSyntax
    ) {}

    /**
     * @summary Restructures an object into a ServiceLocator
     * @description
     *
     * This takes an `object` and converts it to a `ServiceLocator`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceLocator`.
     * @returns {ServiceLocator}
     */
    public static _from_object(
        _o: { [_K in keyof ServiceLocator]: ServiceLocator[_K] }
    ): ServiceLocator {
        return new ServiceLocator(_o.issuer, _o.locator);
    }
}
/* END_OF_SYMBOL_DEFINITION ServiceLocator */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ServiceLocator */
/**
 * @summary The Leading Root Component Types of ServiceLocator
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ServiceLocator: $.ComponentSpec[] = [
    new $.ComponentSpec("issuer", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "locator",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ServiceLocator */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ServiceLocator */
/**
 * @summary The Trailing Root Component Types of ServiceLocator
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ServiceLocator: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ServiceLocator */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ServiceLocator */
/**
 * @summary The Extension Addition Component Types of ServiceLocator
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ServiceLocator: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ServiceLocator */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceLocator */
let _cached_decoder_for_ServiceLocator: $.ASN1Decoder<ServiceLocator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceLocator */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceLocator */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceLocator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceLocator} The decoded data structure.
 */
export function _decode_ServiceLocator(el: _Element) {
    if (!_cached_decoder_for_ServiceLocator) {
        _cached_decoder_for_ServiceLocator = function (
            el: _Element
        ): ServiceLocator {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ServiceLocator contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "issuer";
            sequence[1].name = "locator";
            let issuer!: Name;
            let locator!: AuthorityInfoAccessSyntax;
            issuer = _decode_Name(sequence[0]);
            locator = _decode_AuthorityInfoAccessSyntax(sequence[1]);
            return new ServiceLocator(issuer, locator);
        };
    }
    return _cached_decoder_for_ServiceLocator(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceLocator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceLocator */
let _cached_encoder_for_ServiceLocator: $.ASN1Encoder<ServiceLocator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceLocator */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceLocator */
/**
 * @summary Encodes a(n) ServiceLocator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceLocator, encoded as an ASN.1 Element.
 */
export function _encode_ServiceLocator(
    value: ServiceLocator,
    elGetter: $.ASN1Encoder<ServiceLocator>
) {
    if (!_cached_encoder_for_ServiceLocator) {
        _cached_encoder_for_ServiceLocator = function (
            value: ServiceLocator,
            elGetter: $.ASN1Encoder<ServiceLocator>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Name(value.issuer, $.BER),
                        /* REQUIRED   */ _encode_AuthorityInfoAccessSyntax(
                            value.locator,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ServiceLocator(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceLocator */

/* eslint-enable */
