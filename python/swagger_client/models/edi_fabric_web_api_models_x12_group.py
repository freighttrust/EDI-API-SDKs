# coding: utf-8

"""
    EdiFabric API

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: v1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from swagger_client.models.edi_fabric_core_model_edi_edi_message import EdiFabricCoreModelEdiEdiMessage  # noqa: F401,E501
from swagger_client.models.edi_fabric_core_model_edi_x12_ge import EdiFabricCoreModelEdiX12GE  # noqa: F401,E501
from swagger_client.models.edi_fabric_core_model_edi_x12_gs import EdiFabricCoreModelEdiX12GS  # noqa: F401,E501


class EdiFabricWebApiModelsX12Group(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'gs': 'EdiFabricCoreModelEdiX12GS',
        'ge_trailers': 'list[EdiFabricCoreModelEdiX12GE]',
        'transactions': 'list[EdiFabricCoreModelEdiEdiMessage]'
    }

    attribute_map = {
        'gs': 'gs',
        'ge_trailers': 'geTrailers',
        'transactions': 'transactions'
    }

    def __init__(self, gs=None, ge_trailers=None, transactions=None):  # noqa: E501
        """EdiFabricWebApiModelsX12Group - a model defined in Swagger"""  # noqa: E501

        self._gs = None
        self._ge_trailers = None
        self._transactions = None
        self.discriminator = None

        if gs is not None:
            self.gs = gs
        if ge_trailers is not None:
            self.ge_trailers = ge_trailers
        if transactions is not None:
            self.transactions = transactions

    @property
    def gs(self):
        """Gets the gs of this EdiFabricWebApiModelsX12Group.  # noqa: E501


        :return: The gs of this EdiFabricWebApiModelsX12Group.  # noqa: E501
        :rtype: EdiFabricCoreModelEdiX12GS
        """
        return self._gs

    @gs.setter
    def gs(self, gs):
        """Sets the gs of this EdiFabricWebApiModelsX12Group.


        :param gs: The gs of this EdiFabricWebApiModelsX12Group.  # noqa: E501
        :type: EdiFabricCoreModelEdiX12GS
        """

        self._gs = gs

    @property
    def ge_trailers(self):
        """Gets the ge_trailers of this EdiFabricWebApiModelsX12Group.  # noqa: E501


        :return: The ge_trailers of this EdiFabricWebApiModelsX12Group.  # noqa: E501
        :rtype: list[EdiFabricCoreModelEdiX12GE]
        """
        return self._ge_trailers

    @ge_trailers.setter
    def ge_trailers(self, ge_trailers):
        """Sets the ge_trailers of this EdiFabricWebApiModelsX12Group.


        :param ge_trailers: The ge_trailers of this EdiFabricWebApiModelsX12Group.  # noqa: E501
        :type: list[EdiFabricCoreModelEdiX12GE]
        """

        self._ge_trailers = ge_trailers

    @property
    def transactions(self):
        """Gets the transactions of this EdiFabricWebApiModelsX12Group.  # noqa: E501


        :return: The transactions of this EdiFabricWebApiModelsX12Group.  # noqa: E501
        :rtype: list[EdiFabricCoreModelEdiEdiMessage]
        """
        return self._transactions

    @transactions.setter
    def transactions(self, transactions):
        """Sets the transactions of this EdiFabricWebApiModelsX12Group.


        :param transactions: The transactions of this EdiFabricWebApiModelsX12Group.  # noqa: E501
        :type: list[EdiFabricCoreModelEdiEdiMessage]
        """

        self._transactions = transactions

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(EdiFabricWebApiModelsX12Group, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, EdiFabricWebApiModelsX12Group):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
